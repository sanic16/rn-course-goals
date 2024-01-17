import { View, Text, StyleSheet, Pressable, Modal } from "react-native"

const GoalItem = (
    { 
        item,
        onDeleteItem,
    } : { 
        item: {
            id: string,
            value: string
        },
        onDeleteItem: (goalId: string) => void
    }
) => {
  
  const onRemoveItem = () => {
    onDeleteItem(item.id)
  }
    
  return (
        <View style={styles.goalItem}>
             <Pressable 
                onPress={onRemoveItem}
                // android_ripple={{
                //     color: '#4e4e4e',
                //     foreground: true
                // }}
                style={({pressed}) => pressed && styles.pressedItem }
            >
                <Text style={styles.textItem} >
                    {item.value}
                </Text>
            </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#dedede',
        color: 'black'
      },
    textItem: {
        padding: 8,
        paddingHorizontal: 10
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: '#4a4a4a',
        borderRadius: 10

    }
})

export default GoalItem