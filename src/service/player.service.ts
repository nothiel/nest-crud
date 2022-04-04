import {Player} from '../data/mongo'

export async function createPlayer(insert_data: Object): Promise<string> {
    const player = new Player(insert_data)
    await player.save()
    return String(player['_id'])
}

export async function findPlayerBy(id: string): Promise<Object> {
    const player = await Player.find({'_id': id})
    return player
}

export async function findAllPlayers(): Promise<Object> {
    const players = await Player.find()
    return players
}

export async function modifyPlayer(id: string, modifyData: Object): Promise<Boolean> {
    if (Object.keys(modifyData).length === 0) {
        const modifiedCount = await (await Player.updateOne({'_id': id}, modifyData)).modifiedCount
        return Boolean(modifiedCount)
    } else {
        return false
    }
}

export async function deletePlayer(id: string): Promise<Boolean> {
    const deleteCount = await (await Player.deleteOne({'_id': id})).deletedCount
    return Boolean(deleteCount)
}