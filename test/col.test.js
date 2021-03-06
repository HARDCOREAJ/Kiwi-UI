const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('col',()=>{
    it('exist',()=>{
        expect(Col).to.exist
    })
    it('receive span properties', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
          propsData: {
            span: 1
          }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
      })
      it('receive offset properties', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
          propsData: {
            offset: 1
          }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
      })
      it('receive pc properties', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
          propsData: {
            pc: {span: 1, offset: 2}
          }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
      })
      it('receive ipad properties', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
          propsData: {
            ipad: {span: 1, offset: 2}
          }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
        div.remove()
        vm.$destroy()
      })
      it('receive narrow-pc properties', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
          propsData: {
            narrowPc: {span: 1, offset: 2}
          }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
      })
      it('receive wide-pc properties', () => { 
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
          propsData: {
            widePc: {span: 1, offset: 2}
          }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-wide-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
      })
})