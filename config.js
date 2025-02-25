const config = {
    // API服务器配置
    apiServer: {
        // 使用本地服务器
        baseUrl: 'http://localhost:7860',
        // 备用地址
        fallbackUrl: 'http://127.0.0.1:7860',
        // API路径
        apiPath: '/api/v1/run/f36cb6d2-180d-4b51-a534-a61a7b3d9fdc',
        // 超时设置（毫秒）- 增加到3分钟
        timeout: 180000,
        // 重试次数增加到3次
        retryCount: 3,
        // 重试延迟增加到3秒
        retryDelay: 3000
    }
}; 