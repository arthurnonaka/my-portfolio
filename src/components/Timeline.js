import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import fiscalTechLogo from "../images/fiscaltech-logo.png";
import nordicaLogo from "../images/nordica-logo.png";
import embraerLogo from "../images/embaer-logo.png";
import '../styles/Timeline.css';

export default function Timeline() {
    const backgroundColor = '#BFDDDA'
    const fontColor = '#264653'
    const borderRadius = '15px'
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img className="timeline-icon" src={fiscalTechLogo} alt="fiscaltech-logo" />}
                contentArrowStyle={{ borderRight: 'none' }}
                contentStyle={{ background: backgroundColor, color: fontColor, borderRadius: borderRadius }}
            >
                <h3 className="vertical-timeline-element-title">Desenvolvedor</h3>
                <h4 className="vertical-timeline-element-subtitle">Fiscaltech</h4>
                <p>
                    Desenvolvimento do software para FreeFlow - pedágio sem cancela. <br /> Áreas: Backend (Java), Frontend (Vaadin), Embarcados (C++)
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img className="timeline-icon" src={nordicaLogo} alt="nordica-logo" />}
                contentArrowStyle={{ borderRight: 'none' }}
                contentStyle={{ background: backgroundColor, color: fontColor, borderRadius: borderRadius }}
            >
                <h3 className="vertical-timeline-element-title">Consultor de negócios</h3>
                <h4 className="vertical-timeline-element-subtitle">Nordica Consultoria</h4>
                <p>
                    Consultoria de dados, ETL, análise de indicadores, dashboards. <br /> Tecnologias: QlikSense, PowerBI, VBA
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img className="timeline-icon" src={embraerLogo} alt="embraer-logo" />}
                contentArrowStyle={{ borderRight: 'none' }}
                contentStyle={{ background: backgroundColor, color: fontColor, borderRadius: borderRadius }}
            >
                <h3 className="vertical-timeline-element-title">Estagiário de engenharia</h3>
                <h4 className="vertical-timeline-element-subtitle">Embraer</h4>
                <p>
                    Gestão de projetos, levantamento de requisitos de engenharia, coleta de dados.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}