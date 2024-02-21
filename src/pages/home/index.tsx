import Footer from "../../components/footer";
import Header from "../../components/header";
import Main from "../../components/main";
import Nav from "../../components/nav";
import Linkedin from '../../assets/imgs/linkedin.png';
import Github from '../../assets/imgs/github.png';
import { CalculateSection, Items, ResultSection, SectionImage } from "./style";
import Item from "../../components/item";
import BMI from "../../components/bmi";
import Form from "../../components/form";
import Input from "../../components/input";
import Label from "../../components/label";
import { FormEvent, useState } from "react";
import Image from "../../components/image";
import Mouse from '../../assets/imgs/mouse.png';

const Home = () => {
    /**
     * Variáveis
     * Variables
     */
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [total, setTotal] = useState('');
    const [result, setResult] = useState('');
    const [mensage, setMesage] = useState('');
    /**
     * Realiza o cálculo do IMC (peso / ( altura x altura ) )
     * Testa os valores e exibe uma mensagem ao usuário.
     * Calculates BMI (weight / (height x height) )
     * Tests the values and displays a message to the user.
     * @param event
     */    
    const calculateBMI = (event:FormEvent): void => {
        event.preventDefault();
        if(weight === '' || height === '') {
            setMesage("Fill in the fields to continue!");
            return;
        }
        let total = Number(weight) / ( Number(height) * Number(height) )
        getBMI( total );
        setTotal( total.toFixed(2) );
    }
    /**
     * Recupera o total e faz o teste, logo é exibido ao usuário o seu IMC.
     * Retrieves the total and takes the test, then the user is shown their BMI.
     * @param total 
     */
    const getBMI = (total:number): void => {
        if( total < 18.5 ) {
            setResult('Below Normal');
        }
        else if( total < 25 ) {
            setResult('Normal');
        }
        else if( total < 30 ) {
            setResult('Overweight');
        }
        else if( total < 35 ) {
            setResult('Obesity Grade I');
        }
        else if( total < 41 ) {
            setResult('Obesity Grade II');
        }
        else {
            setResult('Obesity Grade III');
        }
        setTotal( total.toFixed(2) );
    }
    /**
     * Rederiza a página
     * Renders the page
     */
    return (
        <>
            <Header
                title="BMI Calculator"
                date="2024" />
            <Nav
                href1="https://www.linkedin.com/in/katarine-albuquerque/"
                href2="https://github.com/katarine-bez-albuquerque"
                src1={Linkedin}
                src2={Github}
                alt1="Linkedin"
                alt2="Github"
            />
            <Main>
                <CalculateSection>
                    <Form onsubmit={calculateBMI}>
                        <h5>BMI</h5>
                        <section>
                            <article>
                                <Label
                                    description="Weight (kg)"
                                />
                                <Input
                                    type="text"
                                    value={weight}
                                    name="weight"
                                    complete="off"
                                    placeholder="0.00"
                                    onchange={(e) => setWeight(e.target.value)}
                                />
                            </article>
                            <article>
                                <Label
                                    description="Height (m)"
                                />
                                <Input
                                    type="text"
                                    value={height}
                                    name="height"
                                    placeholder="0.00"
                                    complete="off"
                                    onchange={(e) => setHeight(e.target.value)}
                                />
                            </article>                            
                        </section>
                        <h6>{ (weight !== '' || height !== '') ? "" : mensage }</h6>
                        <Input
                            type="submit"
                            value="Calcular"
                        />                        
                    </Form>
                    <BMI
                        description="Your BMI is:"
                        value={total ? total : "0.00"}
                    />
                </CalculateSection>
                <SectionImage>
                    <Image
                        src={Mouse}
                        alt="Scroll the page"
                    />
                </SectionImage>
                <ResultSection>
                    <h2>Understand Your Result</h2>
                    <Items>
                        <Item
                            classname={result === "Obesity Grade III" ? 'active' : 'desactive'}
                            description="over 40"
                            title="Obesity Grade III"
                        />
                        <Item
                            classname={result === "Obesity Grade II" ? 'active' : 'desactive'}
                            description="between 35 and 39.9"
                            title="Obesity Grade II"
                        />
                        <Item
                            classname={result === "Obesity Grade I" ? 'active' : 'desactive'}
                            description="between 30 and 34.9"
                            title="Obesity Grade I"
                        />
                        <Item
                            classname={result === "Overweight" ? 'active' : 'desactive'}
                            description="between 25 and 20.9"
                            title="Overweight"
                        />
                        <Item
                            classname={result === "Normal" ? 'active' : 'desactive'}
                            description="between 18.6 and 24.9"
                            title="Normal"
                        />
                        <Item
                            classname={result === "Below Normal" ? 'active' : 'desactive'}
                            description="below 18.5"
                            title="Below Normal"
                        />
                    </Items>
                </ResultSection>
            </Main>
            <Footer
                description="@BMI Calculator 2024 - All rights reserved."
            />
        </>
    );
}

export default Home;