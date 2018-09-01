import { RoutesModuleModule } from './routes-module.module';

describe('RoutesModuleModule', () => {
  let routesModuleModule: RoutesModuleModule;

  beforeEach(() => {
    routesModuleModule = new RoutesModuleModule();
  });

  it('should create an instance', () => {
    expect(routesModuleModule).toBeTruthy();
  });
});
