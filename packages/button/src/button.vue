<template>
  <button
    :class="[
      'cool-button',
      'cool-button--' + type,
      'cool-button--' + size,
      {
        'cool-button--round': round
      },
      {
        'cool-button--disabled': disabled
      }
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VueCoolButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        return ['default', 'primary', 'info', 'warning', 'danger'].includes(
          type
        )
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator(size) {
        return ['medium', 'small', 'mini'].includes(size)
      }
    }
  },

  methods: {
    onClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
        console.log(123)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cool-button {
  display: inline-block;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  user-select: none;
  cursor: pointer;
  line-height: 1;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

/*颜色*/
.cool-button--default {
  background-color: #fff;
}

.cool-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.cool-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.cool-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.cool-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.cool-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

/*大小*/
.cool-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.cool-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.cool-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}

/*是否圆角*/
.cool-button--round {
  border-radius: 20px;
}
/*是否禁用*/
.cool-button--disabled {
  background-color: rgba(150, 131, 131, 0.3);
  border-color: rgba(150, 131, 131, 0.3);
  cursor: not-allowed;
}
</style>
