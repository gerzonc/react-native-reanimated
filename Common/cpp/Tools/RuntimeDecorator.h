#pragma once

#include <jsi/jsi.h>
#include <memory>
#include <string>
#include <unordered_map>
#include "PlatformDepMethodsHolder.h"
#include "ReanimatedVersion.h"

using namespace facebook;

namespace reanimated {

using RequestFrameFunction =
    std::function<void(jsi::Runtime &, const jsi::Value &)>;
using ScheduleOnJSFunction =
    std::function<void(jsi::Runtime &, const jsi::Value &, const jsi::Value &)>;
using MakeShareableCloneFunction =
    std::function<jsi::Value(jsi::Runtime &, const jsi::Value &)>;
using UpdateDataSynchronouslyFunction =
    std::function<void(jsi::Runtime &, const jsi::Value &, const jsi::Value &)>;

class RuntimeDecorator {
 public:
  static void decorateRuntime(jsi::Runtime &rt, const std::string &label);
  static void decorateUIRuntime(
      jsi::Runtime &rt,
      const UpdatePropsFunction updateProps,
#ifdef RCT_NEW_ARCH_ENABLED
      const RemoveFromPropsRegistryFunction removeFromPropsRegistry,
#endif
      const MeasureFunction measure,
#ifdef RCT_NEW_ARCH_ENABLED
  // nothing
#else
      const ScrollToFunction scrollTo,
#endif
      const DispatchCommandFunction dispatchCommand,
      const RequestFrameFunction requestFrame,
      const ScheduleOnJSFunction scheduleOnJS,
      const MakeShareableCloneFunction makeShareableClone,
      const UpdateDataSynchronouslyFunction updateDataSynchronously,
      const TimeProviderFunction getCurrentTime,
      const SetGestureStateFunction setGestureState,
      const ProgressLayoutAnimationFunction progressLayoutAnimationFunction,
      const EndLayoutAnimationFunction endLayoutAnimationFunction,
      const MaybeFlushUIUpdatesQueueFunction maybeFlushUIUpdatesQueueFunction);
  static void decorateRNRuntime(
      jsi::Runtime &rnRuntime,
      jsi::Runtime &uiRuntime,
      bool isReducedMotion);
};

} // namespace reanimated
