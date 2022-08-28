const styles = {
    button: `bg-[#6188FF] px-[2rem] py-2 rounded-lg mt-1`,
    main: `flex justify-start`
}

const Button = ({ label, onPress }) => {
    return (
        <div classname={styles.main}>
        <button className={styles.button} onClick={onPress}>{label}</button>
        </div>
    )
}

export default Button