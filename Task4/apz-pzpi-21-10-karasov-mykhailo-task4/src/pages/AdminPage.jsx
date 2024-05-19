import React, {useState} from 'react';
import ComplexityComponent from "../components/AdminComponents/ComplexityComponent";
import AdminNavigation from "../components/AdminComponents/AdminNavigation";
import {Container} from "react-bootstrap";
import '../styles/AdminPage.css';
import EducationComponent from "../components/AdminComponents/EducationComponent";
import UserComponent from "../components/AdminComponents/UserComponent";
import CompanyComponent from "../components/AdminComponents/CompanyComponent";
import ActivityComponent from "../components/AdminComponents/ActivityComponent";
import ScannerComponent from "../components/AdminComponents/ScannerComponent";
import ScannerHistoryComponent from "../components/AdminComponents/ScannerHistoryComponent";

const AdminPage = () => {
    const [selectedEntity, setSelectedEntity] = useState('complexity');

    const links = [
        { label: 'Складності', entity: 'complexity' },
        { label: 'Освіти', entity: 'education'},
        { label: 'Користувачі', entity: 'user' },
        { label: 'Компанії', entity: 'company' },
        { label: 'Активності', entity: 'activity' },
        { label: 'Датчики', entity: 'scanner' },
        { label: 'Інформація від датчиків', entity: 'scannerInfo' },
    ];

    const renderEntityComponent = () => {
        switch (selectedEntity) {
            case 'complexity':
                return <ComplexityComponent />
            case 'education':
                return <EducationComponent />
            case 'user':
                return <UserComponent />
            case 'company':
                return <CompanyComponent />
            case 'activity':
                return <ActivityComponent />
            case 'scanner':
                return <ScannerComponent />
            case 'scannerInfo':
                return <ScannerHistoryComponent />
            default:
                return null;
        }
    }

    const changeSelectedEntity = (entity) => {
        setSelectedEntity(entity);
    }

    return (
        <Container className={"min-vh-100 mt-3 mb-3 d-flex"}>
            <div
                className={""}
                style={{ width: "15%" }}
            >
                <AdminNavigation links={ links } onSelectEntity={changeSelectedEntity}/>
            </div>
            <div className={"admin-page w-100 border p-3"}>
                {renderEntityComponent()}
            </div>
        </Container>
    );
};

export default AdminPage;