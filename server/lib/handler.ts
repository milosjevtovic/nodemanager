import { server } from '../server';
import { Commands } from './commands';


export const handle = (input : string) : void => {
    const args = input.split(" ");
    const command = args[0];
    if (Commands[command] !== undefined)
        Commands[command].action(args.slice(1));
    else
        console.log(`[ERROR] Commmand "${command}" was not found. Type "commands" to see the list of all commands.`);
}