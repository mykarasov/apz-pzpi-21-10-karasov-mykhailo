import express from "express";
import ScannerHistoryController from "../controllers/ScannerHistoryController";
import ScannerHistoryMapper from "../mappers/ScannerHistoryMapper/ScannerHistoryMapper";
import ScannerHistoryRepositoryImpl from "../repositoriesImpl/sequelizeRepository/ScannerHistoryRepositoryImpl";
import ScannerHistoryService from "../../core/services/ScannerHistoryService/ScannerHistoryService";
import hasUserCompanyMiddleware from "../../core/common/middlewares/HasUserCompanyMiddleware";
import ScannerService from "../../core/services/ScannerService/ScannerService";
import ScannerRepositoryImpl from "../repositoriesImpl/sequelizeRepository/ScannerRepositoryImpl";
import UserRepositoryImpl from "../repositoriesImpl/sequelizeRepository/UserRepositoryImpl";
import authMiddleware from "../../core/common/middlewares/AuthMiddleware";
import checkRoleMiddleware from "../../core/common/middlewares/CheckRoleMiddleware";
import RolesEnum from "../../core/common/enums/RolesEnum";

const router = express.Router();

const scannerHistoryMapper = new ScannerHistoryMapper();
const scannerService = new ScannerService(new ScannerRepositoryImpl(), new UserRepositoryImpl());
const scannerHistoryService = new ScannerHistoryService(new ScannerHistoryRepositoryImpl(), new ScannerRepositoryImpl());
const scannerHistoryController = new ScannerHistoryController(scannerHistoryService, scannerHistoryMapper, scannerService);

router.post(
    '/',
    scannerHistoryController.createScannerHistory.bind(scannerHistoryController)
);

router.get(
    '/scanner/:id',
    authMiddleware,
    hasUserCompanyMiddleware,
    scannerHistoryController.getHistoryOfScanner.bind(scannerHistoryController)
);

router.get(
    '/:id',
    authMiddleware,
    hasUserCompanyMiddleware,
    scannerHistoryController.getOneScannerHistory.bind(scannerHistoryController)
);

router.delete(
    '/scanner/:id',
    checkRoleMiddleware([RolesEnum.SUBSCRIBER, RolesEnum.ADMIN, RolesEnum.COMPANY_ADMIN]),
    hasUserCompanyMiddleware,
    scannerHistoryController.clearScannerHistory.bind(scannerHistoryController)
);

router.delete(
    '/:id',
    checkRoleMiddleware([RolesEnum.SUBSCRIBER, RolesEnum.ADMIN, RolesEnum.COMPANY_ADMIN]),
    hasUserCompanyMiddleware,
    scannerHistoryController.deleteScannerHistory.bind(scannerHistoryController)
);

export default router;