export function UUID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
