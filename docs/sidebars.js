module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        'about',
        'installation',
        'worklets',
        'shared-values',
        'animations',
        'events',
        'custom_events',
        'layout_animations',
        'architecture',
        'migration',
        'web-support',
        'troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          Hooks: [
            'api/useSharedValue',
            'api/useAnimatedStyle',
            'api/useDerivedValue',
            'api/useAnimatedScrollHandler',
            'api/useAnimatedGestureHandler',
            'api/useAnimatedRef',
            'api/useAnimatedReaction',
            'api/useAnimatedProps',
            'api/useHandler',
            'api/useEvent',
          ],
          Animations: [
            'api/withTiming',
            'api/withSpring',
            'api/withDecay',
            'api/cancelAnimation',
            'api/withDelay',
            'api/withSequence',
            'api/withRepeat',
          ],
          'Native methods': [
            'api/nativeMethods/measure',
            'api/nativeMethods/scrollTo',
          ],
          'Layout Animations': [
            'api/LayoutAnimations/customAnimations',
            'api/LayoutAnimations/entryAnimations',
            'api/LayoutAnimations/exitAnimations',
            'api/LayoutAnimations/keyframeAnimations',
            'api/LayoutAnimations/layoutTransitions',
          ],
          Miscellaneous: ['api/runOnJS'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guide/testing'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/LayoutAnimations/layoutAnimations'],
    },
    {
      type: 'doc',
      id: 'community',
    },
  ],
};