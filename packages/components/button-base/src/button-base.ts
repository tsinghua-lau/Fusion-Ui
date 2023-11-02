import type { Component, ExtractPropTypes, PropType } from 'vue'

export const buttonBaseProps = {
  cs: {
    type: [Object, String, Array] as PropType<TemplateStringsArray>,
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
}

export type ButtonBaseProps = ExtractPropTypes<typeof buttonBaseProps>
