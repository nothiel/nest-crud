import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlayerDto } from './model/player.dto';
import {createPlayer, findPlayerBy, findAllPlayers, modifyPlayer, deletePlayer} from './service/player.service';

@Controller('player')
export class PlayerController {
    @Get(':id')
    async findOne(@Param() param): Promise<Object> {
        const player = await findPlayerBy(param.id)
        return {"Player" : player}
    }

    @Get()
    async findAll(): Promise<Object> {
        const player = await findAllPlayers()
        return {"Players" : player}
    }


    @Post()
    async createPlayer(@Body() player: CreatePlayerDto): Promise<Object> {
        const createdPlayerId = await createPlayer(player)
        return {"Message": "Player created", "id": createdPlayerId}
    }

    @Put(':id')
    async modifyPlayer(@Body() modifyData, @Param() param): Promise<Object> {
        const isModified = await modifyPlayer(param.id, modifyData)
        return isModified ? {"Message": "User deleted"} : {"Message": "Deu ruim!"}
        
    }

    @Delete(':id')
    async deletePlayer(@Param() param): Promise<Object> {
        const isDeleted = await deletePlayer(param.id)
        return isDeleted ? {"Message": "User deleted"} : {"Message": "Deu ruim!"}
    }
}