class LocalStorageService {
    private static memoryFallback = new Map<string, string>();
    private static isServer = typeof window === 'undefined';
    static onError: (error: Error, operation: string, key?: string) => void = () => {};

    private static isAvailable(): boolean {
        if (this.isServer) return false;
        try {
            const testKey = '__storage_test__';
            window.localStorage.setItem(testKey, testKey);
            const retrieved = window.localStorage.getItem(testKey);
            window.localStorage.removeItem(testKey);
            return retrieved === testKey;
        } catch (error) {
            this.onError(error as Error, 'availabilityCheck');
            return false;
        }
    }

    static setItem<T>(key: string, value: T, options: { ttl?: number } = {}): void {
        try {
            const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
            if (this.isAvailable()) {
                window.localStorage.setItem(key, serializedValue);
                if (options.ttl) {
                    const expiration = Date.now() + options.ttl;
                    window.localStorage.setItem(`${key}__exp`, expiration.toString());
                }
            } else {
                this.memoryFallback.set(key, serializedValue);
                if (options.ttl) {
                    this.memoryFallback.set(`${key}__exp`, (Date.now() + options.ttl).toString());
                }
            }
        } catch (error) {
            this.onError(error as Error, 'setItem', key);
        }
    }

    static getItem<T>(key: string): T | null {
        try {
            let item: string | null = null;
            let expiration: string | null = null;
            if (this.isAvailable()) {
                item = window.localStorage.getItem(key);
                expiration = window.localStorage.getItem(`${key}__exp`);
            } else {
                item = this.memoryFallback.get(key) ?? null;
                expiration = this.memoryFallback.get(`${key}__exp`) ?? null;
            }
            if (expiration && Date.now() > parseInt(expiration, 10)) {
                this.removeItem(key);
                return null;
            }
            if (item === null) return null;
            try {
                return JSON.parse(item) as T;
            } catch {
                return item as unknown as T;
            }
        } catch (error) {
            this.onError(error as Error, 'getItem', key);
            return null;
        }
    }

    static removeItem(key: string): void {
        try {
            if (this.isAvailable()) {
                window.localStorage.removeItem(key);
                window.localStorage.removeItem(`${key}__exp`);
            } else {
                this.memoryFallback.delete(key);
                this.memoryFallback.delete(`${key}__exp`);
            }
        } catch (error) {
            this.onError(error as Error, 'removeItem', key);
        }
    }

    static clearAll(): void {
        try {
            if (this.isAvailable()) {
                window.localStorage.clear();
            }
            this.memoryFallback.clear();
        } catch (error) {
            this.onError(error as Error, 'clearAll');
        }
    }

    /**
     * Gets the number of items in storage (renamed from 'length' to avoid conflict)
     */
    static get itemCount(): number {
        try {
            if (this.isAvailable()) {
                return window.localStorage.length;
            }
            return this.memoryFallback.size;
        } catch (error) {
            this.onError(error as Error, 'itemCountCheck');
            return 0;
        }
    }

    static getAllItems(): Record<string, unknown> {
        const result: Record<string, unknown> = {};
        try {
            if (this.isAvailable()) {
                for (let i = 0; i < window.localStorage.length; i++) {
                    const key = window.localStorage.key(i);
                    if (key && !key.endsWith('__exp')) {
                        const value = window.localStorage.getItem(key);
                        if (value !== null) {
                            try {
                                result[key] = JSON.parse(value);
                            } catch {
                                result[key] = value;
                            }
                        }
                    }
                }
            } else {
                this.memoryFallback.forEach((value, key) => {
                    if (!key.endsWith('__exp')) {
                        try {
                            result[key] = JSON.parse(value);
                        } catch {
                            result[key] = value;
                        }
                    }
                });
            }
        } catch (error) {
            this.onError(error as Error, 'getAllItems');
        }
        return result;
    }
}

export default LocalStorageService;