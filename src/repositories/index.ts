import { IResearchRepository } from './interfaces/IResearchRepository';
import { IArticlesRepository } from './interfaces/IArticlesRepository';
import { IServicesRepository } from './interfaces/IServicesRepository';
import { ITrainingRepository } from './interfaces/ITrainingRepository';
import { IMediaRepository } from './interfaces/IMediaRepository';
import { IHomeRepository } from './interfaces/IHomeRepository';

import { JsonResearchRepository } from './json/JsonResearchRepository';
import { JsonArticlesRepository } from './json/JsonArticlesRepository';
import { JsonServicesRepository } from './json/JsonServicesRepository';
import { JsonTrainingRepository } from './json/JsonTrainingRepository';
import { JsonMediaRepository } from './json/JsonMediaRepository';
import { JsonHomeRepository } from './json/JsonHomeRepository';

// Singleton Repository Instances (JSON-backed, ready for Firebase replacement)
export const researchRepository: IResearchRepository = new JsonResearchRepository();
export const articlesRepository: IArticlesRepository = new JsonArticlesRepository();
export const servicesRepository: IServicesRepository = new JsonServicesRepository();
export const trainingRepository: ITrainingRepository = new JsonTrainingRepository();
export const mediaRepository: IMediaRepository = new JsonMediaRepository();
export const homeRepository: IHomeRepository = new JsonHomeRepository();

export * from './interfaces/IResearchRepository';
export * from './interfaces/IArticlesRepository';
export * from './interfaces/IServicesRepository';
export * from './interfaces/ITrainingRepository';
export * from './interfaces/IMediaRepository';
export * from './interfaces/IHomeRepository';
