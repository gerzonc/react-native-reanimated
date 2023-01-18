import NativeReanimatedModule from './NativeReanimated';
import { ComplexWorkletFunction } from './commonTypes';
import {
  makeShareableCloneOnUIRecursive,
  makeShareableCloneRecursive,
} from './shareables';

let _runOnUIQueue: Array<[ComplexWorkletFunction<any[], any>, any[]]> = [];

export function runOnUI<A extends any[], R>(
  worklet: ComplexWorkletFunction<A, R>
): (...args: A) => void {
  if (__DEV__) {
    if (worklet.__workletHash === undefined) {
      throw new Error('runOnUI() can only be used on worklets');
    }
  }
  return (...args) => {
    _runOnUIQueue.push([worklet, args]);
    if (_runOnUIQueue.length === 1) {
      setImmediate(() => {
        const queue = _runOnUIQueue;
        _runOnUIQueue = [];
        NativeReanimatedModule.scheduleOnUI(
          makeShareableCloneRecursive(() => {
            'worklet';
            queue.forEach(([worklet, args]) => {
              worklet(...args);
            });
            global.__flushImmediates();
          })
        );
      });
    }
  };
}

if (__DEV__) {
  try {
    runOnUI(() => {
      'worklet';
    });
  } catch (e) {
    throw new Error(
      'Failed to create a worklet. Did you forget to add Reanimated Babel plugin in babel.config.js? See installation docs at https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation#babel-plugin.'
    );
  }
}

export function runOnJS<A extends any[], R>(
  fun: ComplexWorkletFunction<A, R>
): (...args: A) => void {
  'worklet';
  if (fun.__remoteFunction) {
    // in development mode the function provided as `fun` throws an error message
    // such that when someone accidently calls it directly on the UI runtime, they
    // see that they should use `runOnJS` instead. To facilitate that we purt the
    // reference to the original remote function in the `__remoteFunction` property.
    fun = fun.__remoteFunction;
  }
  if (!_WORKLET) {
    return fun;
  }
  return (...args) => {
    _scheduleOnJS(
      fun,
      args.length > 0 ? makeShareableCloneOnUIRecursive(args) : undefined
    );
  };
}