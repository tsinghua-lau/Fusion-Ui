import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import {
  css,
  cx,
  themeSchemes,
  useColor,
  useRgbColor,
} from '@fusion-ui-vue/theme'
import type { SwitchProps } from './switch'
import { switchHeight } from './switch'

const useCss: ComponentStylingHook<SwitchProps> = (props, ns) => {
  const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
  const $colorRgb = useRgbColor(
    props,
    'color',
    'var(--md-sys-color-primary-rgb)'
  )
  const $onColor = computed(() =>
    themeSchemes.includes(props.color as any)
      ? `var(--md-sys-color-on-${props.color})`
      : 'var(--md-sys-color-on-primary)'
  )

  const switchStyle = css`
    --fn-switch-color: ${$color.value};
    --fn-switch-color-rgb: ${$colorRgb.value};
    --fn-switch-on-color: ${$onColor.value};
    --fn-switch-height: ${switchHeight[props.size]}px;
    display: inline-flex;
    align-items: center;
    position: relative;
    aspect-ratio: 52 / 32;
    box-sizing: border-box;
    border: 2px solid var(--md-sys-color-outline);
    border-radius: var(--md-sys-shape-corner-extra-large-default-size);
    cursor: pointer;
    height: var(--fn-switch-height);
    /**
    UPDATE NEEDED
    should use var(--md-sys-color-surface-container-heightest)
    @link https://m3.material.io/components/text-fields/specs
  */
    color: var(--md-sys-color-surface-variant);
    background-color: transparent;
    transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    @media (any-hover: hover) {
      --fn-switch-hover-color: rgb(
        var(--fn-switch-color-rgb) /
          var(--md-sys-state-hover-state-layer-opacity)
      );
      --fn-switch-checked-hover-color: color-mix(
        in srgb,
        var(--fn-switch-color),
        var(--fn-sys-color-switch-reverse)
          var(--md-sys-state-hover-state-layer-opacity-percentage)
      );
      &:hover {
        background-color: var(--fn-switch-hover-color);
      }
      &:not([disabled]).${ns?.m('checked')}:hover {
        border-color: var(--fn-switch-checked-hover-color);
        background-color: var(--fn-switch-checked-hover-color);
      }
    }

    & .fn-switch__thumb {
      z-index: 2;
      --interval: 3px;
      --wrapper-height: calc(
        var(--fn-switch-height) - 4px - var(--interval) * 2
      );
      left: calc(
        -1 * (var(--fn-switch-height) - 4px - var(--wrapper-height) * 0.66) / 2
      );
      transition: left 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      & .fn-switch__thumb--icon-wrapper {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: var(--wrapper-height);
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 50%;
        background-color: var(--md-sys-color-outline);
        transform: scale(0.66);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        & .fn-icon {
          font-size: 16px;
          transform: scale(0);
          transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        }
      }
    }

    &.${ns?.m('checked')} {
      color: var(--fn-switch-color);
      border-color: var(--fn-switch-color);
      background-color: var(--fn-switch-color);
      & .fn-switch__thumb {
        left: calc(100% - var(--fn-switch-height) - var(--interval) + 2px);
        & .fn-switch__thumb--icon-wrapper {
          background-color: var(--fn-switch-on-color);
          transform: scale(1);
          & .fn-icon {
            transform: scale(1);
          }
        }
      }
    }

    &[disabled] {
      cursor: default;
      color: var(--md-sys-color-on-surface);
      border-color: var(--fn-sys-color-disabled-level-1);

      & .fn-switch__thumb {
        & .fn-switch__thumb--icon-wrapper {
          background-color: var(--fn-sys-color-disabled-level-0);
          & .fn-icon {
            color: var(--fn-sys-color-disabled-level-0);
          }
        }
      }

      @media (any-hover: hover) {
        &:hover {
          background-color: transparent;
        }
      }

      &.${ns?.m('checked')} {
        background-color: var(--fn-sys-color-disabled-level-1);
        & .fn-switch__thumb--icon-wrapper {
          background-color: var(--md-sys-color-surface);
        }
      }
    }
  `

  return computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(switchStyle, styleFromCs)
  })
}

export default useCss
