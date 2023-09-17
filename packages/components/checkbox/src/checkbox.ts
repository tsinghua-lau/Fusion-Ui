import type {
  ThemeCallBack,
  ThemePaletteColor,
} from '@fusion-ui/theme/src/use-theme/theme'
import { type ComponentSize, componentSizes } from '@fusion-ui/constants'
import type { ExtractPropTypes, PropType } from 'vue'

export type CheckboxStatus = 'blank' | 'checked'

export const checkboxProps = {
  modelValue: {
    type: [Boolean, Array] as PropType<boolean | string[]>,
  },
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSize>,
    value: componentSizes,
    default: 'medium',
  },
  enableRipple: {
    type: Boolean,
    default: true,
  },
}

export const iconType: Record<CheckboxStatus, string> = {
  blank: 'ic:baseline-check-box-outlined-blank',
  checked: 'ic:baseline-check-box',
  // indeterminate: 'ic:baseline-indeterminate-check-box',
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>