import React from 'react';

const Button = React.memo(({ label = "Add to cart", clickFunction = () => false }) => {
    // const [stateValue, changeState] = useState('test value');

    //once when component mounted
    // useEffect(() => {
    //     console.log('useEffect',stateValue);
    //     // changeState('new test value');
    //     // console.log(stateValue)

    //     return () => {
    //         console.log('unmount');
    //     }
    // }, [stateValue]);

    // function hookexample(){
    //     changeState('onclicked');
    //     console.log(stateValue);
    // }


    // console.log('button:', stateValue);
    return <>
    <button className="btn-atc" onClick={() => clickFunction()}>{label}</button>
    {/* <button className="btn-atc" onClick={() => hookexample()}>click</button> */}
    </>
});

export default Button;