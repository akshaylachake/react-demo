import React from 'react'
import ClassComponent from '../../ClassComponent'
import FunctionalComponent from '../../FunctionalComponent'
import Click from '../../Click'
import Counter from '../../Counter'
import ParentComponent from '../../ParentComponent'

function Home() {
  return (
    <>
        =====================================
        ClassComponent Learning
        {/* <ClassComponent name='ClassProp'/> */}
        <ClassComponent name='Class Child Component'>
          Hello ClassComponent Children
        </ClassComponent>

        <br/>
        <br/>
        =====================================
        FunctionalComponent Learning
        {/* <FunctionalCompnent name="Function Prop"/> */}
        <FunctionalComponent name="Functional Child Component">
          Hello FunctionalCompnent Children
        </FunctionalComponent>

        <br/>
        <br/>
        =====================================
        HigherOrderComponent Learning
        <Click />
        <Counter />
        
        <br/>
        <br/>
        =====================================
        PureComponent Learning
        <ParentComponent/>
    </>
  )
}

export default Home