import { h, defineComponent } from "vue"
import { View } from "@tarojs/components"
import { CommonEvent } from "@tarojs/components/types/common"
import { AtActionSheetItemProps } from "types/action-sheet";
import classNames from "classnames"
import AtComponentWithDefaultProps from "@/components/mixins";

const AtActionSheetItem = defineComponent({
    mixins: [AtComponentWithDefaultProps],
    
    props: {
        onClick: { 
            type: Function as unknown as () => (event?: CommonEvent) => void, 
            default: () => () => {} 
        },
    },

    setup(props: AtActionSheetItemProps, { slots }) {

        function handleClick(e: CommonEvent) {
            props.onClick && props.onClick(e)
        }

        return () => {
            const rootClass = classNames('at-action-sheet__item', props.className)
            
            return h(View, {
                    class: rootClass,
                    onTap: handleClick
                },
                slots.default && slots.default()
            )
        }
    }
})

export default AtActionSheetItem