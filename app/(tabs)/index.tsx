import {Button, View} from 'tamagui'
import {router} from "expo-router";

export default function TabOneScreen() {
    return (
        <View flex={1} alignItems="center">
            <Button onPress={() => router.push("other")}>Go to other with sheet</Button>
        </View>
    )
}
