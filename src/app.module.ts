import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    // Import the ConfigModule to manage environment variables
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    // Import the UserModule to handle user-related functionality
    // Import TypeOrmModule to connect to the database
    // Ensure you have the TypeORM package installed: npm install @nestjs/typeorm typeorm pg
    // Set synchronize to true for development, but false in production
    // This will automatically create database tables based on your entities
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migration/{.ts,*.js}'], // Adjust the path to your migration files
      migrationsRun: true, // Automatically run migrations on application startup
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
