import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../reducers/counterSlice";
import { Button, StyleSheet, Text, View } from 'react-native';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <>
        <Text>counter: {count}</Text>
        <View style={styles.container}>

          <Button
          onPress={() => dispatch(increment())}
          title="Increment value"
          color="#841584"
          style={styles.buttonStyle}
          accessibilityLabel="Increment value"/>
          

          <Button
          onPress={() => dispatch(decrement())}
          title="Decrement value"
          color="#841584"
          style={styles.buttonStyle}
        accessibilityLabel="Decrement value"/>
        </View>
    </>
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={e => setIncrementAmount(e.target.value)}
    //     />
    //     <Button
    //       className={styles.button}
    //       onClick={() =>
    //         dispatch(incrementByAmount(Number(incrementAmount) || 0))
    //       }
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    //     >
    //       Add Async
    //     </button>
    //   </div>
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonstyle:{
    
  }
});
