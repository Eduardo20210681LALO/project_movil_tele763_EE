module.exports = {
    preset: "react-native",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
        "node_modules/(?!(@react-native|react-native|@react-native-community|react-native-paper|@fortawesome)/)"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    
    // Añade esto para ignorar imágenes
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '^@/(.*)$': '<rootDir>/app/$1',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Si usas TypeScript
    },
    testEnvironment: 'jsdom', // Usar jsdom como entorno de prueba
};
