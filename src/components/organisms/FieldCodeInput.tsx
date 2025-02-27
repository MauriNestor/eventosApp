import { Platform, StyleSheet, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import React, { useState } from "react";

// import TextComponent from '../text/TextComponent';
import { colors } from "@app/theme/colors";
import TextComponent from "../atoms/TextComponent";

const CELL_COUNT = 4;

type Props = {
  cellCount?: number;
};
const FieldCodeInput = (props: Props) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({
    value,
    cellCount: props.cellCount ?? CELL_COUNT,
  });
  const [propsCell, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...propsCell}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: "sms-otp",
          default: "one-time-code",
        })}
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
          >
            <TextComponent size="16" onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </TextComponent>
          </View>
        )}
      />
    </View>
  );
};

export default FieldCodeInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  codeFieldRoot: {
    borderWidth: 0,
    gap: 8,
  },
  cell: {
    flexDirection: "row",
    width: 56,
    height: 72,
    // lineHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: colors.muted,
    borderRadius: 8,
  },
  focusCell: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
});
