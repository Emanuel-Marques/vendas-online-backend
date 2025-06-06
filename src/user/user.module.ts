import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './interfaces/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // Import the UserEntity for TypeORM
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
