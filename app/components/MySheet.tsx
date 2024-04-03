import {Paragraph} from "tamagui";
import {Sheet} from "@tamagui/sheet/src/Sheet";
import {useState} from "react";

export function MySheet() {
    const [position, setPosition] = useState(2);
    return <Sheet
        forceRemoveScrollEnabled={true}
        open={true}
        snapPointsMode="percent"
        snapPoints={[80, 50, 20]}
        position={position}
        onPositionChange={setPosition}
        zIndex={10}
        animation="medium"
        dismissOnOverlayPress={false}
    >
        <Sheet.Handle/>
        <Sheet.Frame bc="$background" padding="$4" flex={1}>
            <Paragraph>My Sheet Content</Paragraph>
        </Sheet.Frame>
    </Sheet>;
}
