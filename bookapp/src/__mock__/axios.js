// Mocking axios for unit testing
const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
