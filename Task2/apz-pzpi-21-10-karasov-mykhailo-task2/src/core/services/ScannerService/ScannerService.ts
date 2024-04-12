import IScannerRepository from "../../repositories/ScannerRepository/IScannerRepository";
import CreateOrUpdateScannerDto from "../../repositories/ScannerRepository/dto/CreateOrUpdateScannerDto";
import ApiError from "../../common/error/ApiError";
import IUserRepository from "../../repositories/UserRepository/IUserRepository";
import PaginationClass from "../../common/uttils/PaginationClass";
import ScannerDomainModel from "../../domain/models/Scanner/Scanner";

export default class ScannerService {
    constructor(
        private readonly scannerRepository: IScannerRepository,
        private readonly userRepository: IUserRepository,
    ){}

    public async createScanner(dto: CreateOrUpdateScannerDto) {
        if (dto.userId && dto.companyId) {
            await this.checkUser(dto.userId, dto.companyId);
        }
        return await this.scannerRepository.createScanner(dto);
    }

    public async updateScanner(dto: CreateOrUpdateScannerDto, scannerId: number) {
        if (dto.userId && dto.companyId) {
            await this.checkUser(dto.userId, dto.companyId);
        }
        return await this.scannerRepository.updateScanner(dto, scannerId);
    }



    public async getScanner(id: number, companyId: number) {
        const scanner = await this.scannerRepository.getScannerById(id);
        if (!scanner) {
            throw ApiError.notFound(`There no scanner with ID: ${id}`);
        }
        if (scanner.companyId !== companyId) {
            throw ApiError.forbidden(`You have not access to this information`);
        }
        return scanner;
    }


    public async getCompanyScanners(companyId: number, limit: number, offset: number) {
        const scanners = await this.scannerRepository.getScannersByCompany(companyId);
        const paginationClass: PaginationClass<ScannerDomainModel> = new PaginationClass();
        return paginationClass.paginateItems(scanners, offset, limit);
    }

    public async deleteScanner(id: number, companyId: number) {
        const scanner = await this.scannerRepository.getScannerById(id);
        if (scanner) {
            if (scanner.companyId !== companyId) {
                throw ApiError.forbidden(`You have not access to this information`);
            }
            await this.scannerRepository.deleteScanner(id);
        }
        return;
    }

    public async deleteScannerAdmin(id: number) {
        await this.scannerRepository.deleteScanner(id);
        return;
    }

    private async checkUser(userId: number, companyId: number) {
        const user = await this.userRepository.getUserById(userId);
        if (user) {
            if (user.companyId !== companyId) {
                throw ApiError.forbidden(`You have not access to this information`);
            }
        } else {
            throw ApiError.notFound(`There no user with ID: ${userId}`);
        }
    }

    public async getScannerById(scannerId: number) {
        const scanner = await this.scannerRepository.getScannerById(scannerId);
        if (!scanner) {
            throw ApiError.notFound(`There no scanner with ID: ${scannerId}`);
        }
        return scanner;
    }

    public async getScanners(offset: number, limit: number) {
        const scanners =  await this.scannerRepository.getScanners();
        const paginationClass: PaginationClass<ScannerDomainModel> = new PaginationClass();
        return paginationClass.paginateItems(scanners, offset, limit);
    }

}