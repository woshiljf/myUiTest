/**
 * @author monkeywang
 * Date: 17/11/18
 */
import Vue from 'vue'
import MessageTip from './src/message.vue'

let LoadingBarConstructor = Vue.extend(MessageTip)


let MessageBox = () => {
  return new LoadingBarConstructor()
}

export default MessageBox()



