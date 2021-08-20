import keyboardStyles from "../styles/keyboard.module.css";
import textStyles from "../styles/text.module.css";

export default function Keyboard({rows, label}) {
    return (
        <div className={keyboardStyles.centerer}>
            <div className={keyboardStyles.wrapper}>
                <div className={keyboardStyles.label}>{label}</div>
                {rows.map((row, i) => (
                    <div className={keyboardStyles.row} key={i}>
                        {row.map((key, j) => (
                            <div className={`${keyboardStyles.key} ${textStyles.small}`} key={j}>{key}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}