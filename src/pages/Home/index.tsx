import { ChangeEvent, useState } from "react"
import SelectInput from "../../components/SelectInput"
import { getDashboard } from "../../services/requests"
import { Body, Container, Header, HeaderFilter, HeaderInfo, HeaderSubtitle, HeaderTitle } from "./styles"

export const Home = () => {
    const [monthSelected, setMonthSelected] = useState((new Date().getMonth() + 1).toString().padStart(2, '0'))
    const [yearSelected, setYearSelected] = useState((new Date().getFullYear()).toString())

    const handleMonthSelected = (e: ChangeEvent<HTMLSelectElement>) => setMonthSelected(e.target.value)
    const handleYearSelected = (e: ChangeEvent<HTMLSelectElement>) => setYearSelected(e.target.value)

    const getYears = () => {
        const years = [];

        for (let year = 2024; year <= new Date().getFullYear(); year++) {
            years.push({ label: year.toString(), value: year.toString() });
        }

        return years;
    }

    const getMonths = () => {
        const monthsArray = Array.from({ length: 12 }, (_, index) => {
            const date = new Date(new Date().getFullYear(), index, 1);
            return {
                value: (index + 1).toString().padStart(2, '0'),
                label: date.toLocaleString('pt-BR', { month: 'long' })
            };
        });

        return monthsArray
    }

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <HeaderTitle>Meu saldo</HeaderTitle>
                    <HeaderSubtitle>Acompanhe seu saldo e filtre por mês e ano com facilidade!</HeaderSubtitle>
                </HeaderInfo>

                <HeaderFilter>
                    <SelectInput
                        value={monthSelected}
                        onChange={handleMonthSelected}
                        options={getMonths()}
                    />
                    <SelectInput
                        value={yearSelected}
                        onChange={handleYearSelected}
                        options={getYears()}
                    />
                </HeaderFilter>
            </Header>

            <Body>

            </Body>
        </Container>
    )
}