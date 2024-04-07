import ComplexityService from "../../core/services/ComplexityService/ComplexityService";
import ComplexityMapper from "../mappers/ComplexityMapper/ComplexityMapper";
import {Request, NextFunction, Response} from "express";
import {validationResult} from "express-validator";
import formatValidationErrors from "../../core/common/uttils/ValidationErrorsUttils";
import ApiError from "../../core/common/error/ApiError";
import CreateOrUpdateComplexityDto from "../../core/repositories/ComplexityRepository/dto/CreateOrUpdateComplexityDto";

export default class ComplexityController {
    constructor(
        private readonly complexityService: ComplexityService,
        private readonly complexityMapper: ComplexityMapper
    ) {}

    public async createComplexity(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                complexityTitle,
                evaluation
            } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = formatValidationErrors(errors.array());
                return next(ApiError.badRequest(errorMessages.join(', ')));
            }
            const dto: CreateOrUpdateComplexityDto = new CreateOrUpdateComplexityDto(complexityTitle, evaluation);
            const complexityController = await this.complexityService.createComplexity(dto);
            return res.status(201).json({ complexity: this.complexityMapper.toPersistenceModel(complexityController)});

        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async getComplexities(req: Request, res: Response, next: NextFunction) {
        try {
            const complexitiesDomainModel = await this.complexityService.getAllComplexity();
            const complexities = complexitiesDomainModel.map(complexityDomainModel => {
                return this.complexityMapper.toPersistenceModel(complexityDomainModel);
            });
            return res.status(200).json({ complexities: complexities});

        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async getOneComplexity(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const complexityDomainModel = await this.complexityService.getComplexityById(Number(id));
            return res.status(200).json({ complexity: this.complexityMapper.toPersistenceModel(complexityDomainModel)});

        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async updateComplexity(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                complexityTitle,
                evaluation
            } = req.body;
            const { id } = req.params;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = formatValidationErrors(errors.array());
                return next(ApiError.badRequest(errorMessages.join(', ')));
            }

            const dto: CreateOrUpdateComplexityDto = new CreateOrUpdateComplexityDto(complexityTitle, evaluation);
            const updatedComplexityDomain = await this.complexityService.updateComplexity(Number(id), dto);
            return res.status(200).json({complexity: this.complexityMapper.toPersistenceModel(updatedComplexityDomain)});

        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async deleteComplexity(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await this.complexityService.deleteComplexity(Number(id));

            return res.status(200).json({ });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}