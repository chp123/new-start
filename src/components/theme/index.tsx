import React from 'react'
import { connect } from 'react-redux'

const Theme = (props: any) => {
    const { theme, onLight, onDark } = props;
    return (
        <div>
            <h1>主题色: {theme}</h1>
            <button onClick={onLight}>浅色</button>
            <button onClick={onDark}>深色</button>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    theme: state.theme,
});

const mapDispatchToProps = (dispatch: any) => ({
    onLight: () => dispatch({ type: 'LIGHT' }),
    onDark: () => dispatch({ type: 'DARK' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Theme);