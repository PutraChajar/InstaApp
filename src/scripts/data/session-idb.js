import { openDB } from 'idb';
import CONFIG from '../globals/config.js';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const SessionIdb = {
    async cek_session() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async putData(data) {
        if (!data.hasOwnProperty('id')) {
            return;
        }

        return (await dbPromise).put(OBJECT_STORE_NAME, data);
    },
    async deleteData(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default SessionIdb;