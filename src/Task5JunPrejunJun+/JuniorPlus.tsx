import React from "react";
import theme from "styled-theming";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {changerColorTheme} from "../state/themeChangerReducer";
import styled, {ThemeProvider} from "styled-components";
import ControlledOpenSelect from "../common/SelectMaterialUI";
import Request from "../Task13/Request";

export const backgroundColor = theme("theme", {
    Salmon: "#EE82EE",
    ming: "#3C6E71",
    indigo: "#284B63"
});

export const textColor = theme("theme", {
    Salmon: "#C32F27",
    ming: "#EED7C5",
    indigo: "#EEE2DF"
});

const ContainerStyled = styled.div`background-color: ${backgroundColor}; color: ${textColor}`

const optionArr = [
    {title: 'DEFAULT', value: 'jet'},
    {title: 'GREEN', value: 'ming'},
    {title: 'BLUE', value: 'indigo'},
]

function JuniorPlus() {

    const changeTheme = useSelector<RootStateType>(state => state.juniorPlusPage.color)
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {

        dispatch(changerColorTheme(e.currentTarget.value as string))
    }



    const optionElement = optionArr.map((el: any, i: number) => {
        return <option key={i} value={el.value}>{el.title}</option>
    })

    return (
        <ThemeProvider theme={{theme: changeTheme}}>
                <ContainerStyled>
                    <h1>JuniorPlus</h1>
                    <div>
                        <div>
                            <h3>Task 12</h3>
                            <ControlledOpenSelect optionArr={optionArr} value={changeTheme}
                                                  handleChange={handleChange} optionElement={optionElement}/>
                        </div>
                        <hr/>
                        <div>
                            <h3>Task 13</h3>
                            <Request />
                        </div>
                    </div>
                </ContainerStyled>
        </ThemeProvider>
    )
}

export default JuniorPlus;