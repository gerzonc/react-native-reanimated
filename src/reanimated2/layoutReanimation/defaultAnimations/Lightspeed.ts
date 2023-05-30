import { withSequence, withTiming } from '../../animation';
import {
  ComplexAnimationBuilder,
  BaseAnimationBuilder,
} from '../animationBuilder';
import {
  EntryAnimationsValues,
  EntryExitAnimationFunction,
  ExitAnimationsValues,
  IEntryExitAnimationBuilder,
} from '../animationBuilder/commonTypes';

export class LightSpeedInRight
  extends ComplexAnimationBuilder
  implements IEntryExitAnimationBuilder
{
  static createInstance<T extends typeof BaseAnimationBuilder>(
    this: T
  ): InstanceType<T> {
    return new LightSpeedInRight() as InstanceType<T>;
  }

  build = (): EntryExitAnimationFunction => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.getDelay();
    const duration = this.getDuration();
    const callback = this.callbackV;
    const initialValues = this.initialValues;

    // TODO TYPESCRIPT This should be temporary, it was added to get rid of .d.ts file
    return (values: EntryAnimationsValues | ExitAnimationsValues) => {
      'worklet';
      return {
        animations: {
          opacity: delayFunction(delay, withTiming(1, { duration: duration })),
          transform: [
            {
              translateX: delayFunction(
                delay,
                animation(0, { ...config, duration: duration * 0.7 })
              ),
            },
            {
              skewX: delayFunction(
                delay,
                withSequence(
                  withTiming('10deg', { duration: duration * 0.7 }),
                  withTiming('-5deg', { duration: duration * 0.15 }),
                  withTiming('0deg', { duration: duration * 0.15 })
                )
              ),
            },
          ],
        },
        initialValues: {
          opacity: 0,
          transform: [{ translateX: values.windowWidth }, { skewX: '-45deg' }],
          ...initialValues,
        },
        callback: callback,
      };
    };
  };
}

export class LightSpeedInLeft
  extends ComplexAnimationBuilder
  implements IEntryExitAnimationBuilder
{
  static createInstance<T extends typeof BaseAnimationBuilder>(
    this: T
  ): InstanceType<T> {
    return new LightSpeedInLeft() as InstanceType<T>;
  }

  build = (): EntryExitAnimationFunction => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.getDelay();
    const duration = this.getDuration();
    const callback = this.callbackV;
    const initialValues = this.initialValues;

    // TODO TYPESCRIPT This should be temporary, it was added to get rid of .d.ts file
    return (values: EntryAnimationsValues | ExitAnimationsValues) => {
      'worklet';
      return {
        animations: {
          opacity: delayFunction(delay, withTiming(1, { duration: duration })),
          transform: [
            {
              translateX: delayFunction(
                delay,
                animation(0, { ...config, duration: duration * 0.7 })
              ),
            },
            {
              skewX: delayFunction(
                delay,
                withSequence(
                  withTiming('-10deg', { duration: duration * 0.7 }),
                  withTiming('5deg', { duration: duration * 0.15 }),
                  withTiming('0deg', { duration: duration * 0.15 })
                )
              ),
            },
          ],
        },
        initialValues: {
          opacity: 0,
          transform: [{ translateX: -values.windowWidth }, { skewX: '45deg' }],
          ...initialValues,
        },
        callback: callback,
      };
    };
  };
}

export class LightSpeedOutRight
  extends ComplexAnimationBuilder
  implements IEntryExitAnimationBuilder
{
  static createInstance<T extends typeof BaseAnimationBuilder>(
    this: T
  ): InstanceType<T> {
    return new LightSpeedOutRight() as InstanceType<T>;
  }

  build = (): EntryExitAnimationFunction => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.getDelay();
    const callback = this.callbackV;
    const initialValues = this.initialValues;

    // TODO TYPESCRIPT This should be temporary, it was added to get rid of .d.ts file
    return (values: EntryAnimationsValues | ExitAnimationsValues) => {
      'worklet';
      return {
        animations: {
          opacity: delayFunction(delay, animation(0, config)),
          transform: [
            {
              translateX: delayFunction(
                delay,
                animation(values.windowWidth, config)
              ),
            },
            {
              skewX: delayFunction(delay, animation('-45deg', config)),
            },
          ],
        },
        initialValues: {
          opacity: 1,
          transform: [{ translateX: 0 }, { skewX: '0deg' }],
          ...initialValues,
        },
        callback: callback,
      };
    };
  };
}

export class LightSpeedOutLeft
  extends ComplexAnimationBuilder
  implements IEntryExitAnimationBuilder
{
  static createInstance<T extends typeof BaseAnimationBuilder>(
    this: T
  ): InstanceType<T> {
    return new LightSpeedOutLeft() as InstanceType<T>;
  }

  build = (): EntryExitAnimationFunction => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.getDelay();
    const callback = this.callbackV;
    const initialValues = this.initialValues;

    // TODO TYPESCRIPT This should be temporary, it was added to get rid of .d.ts file
    return (values: EntryAnimationsValues | ExitAnimationsValues) => {
      'worklet';
      return {
        animations: {
          opacity: delayFunction(delay, animation(0, config)),
          transform: [
            {
              translateX: delayFunction(
                delay,
                animation(-values.windowWidth, config)
              ),
            },
            {
              skewX: delayFunction(delay, animation('45deg', config)),
            },
          ],
        },
        initialValues: {
          opacity: 1,
          transform: [{ translateX: 0 }, { skewX: '0deg' }],
          ...initialValues,
        },
        callback: callback,
      };
    };
  };
}
