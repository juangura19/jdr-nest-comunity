import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, MemoryHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private mongo: MongooseHealthIndicator,
        private memory: MemoryHealthIndicator,
    ) { }

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([
            async () => this.mongo.pingCheck('mongodb', { timeout: 300 }),
            async () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
            async () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
        ]);
    }
}
