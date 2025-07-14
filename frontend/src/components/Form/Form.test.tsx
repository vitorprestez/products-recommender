import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";
import mockProducts from "../../mocks/mockProducts";

const mockedResetForm = jest.fn();
const mockedHandleChange = jest.fn();
const mockedSetRecommendations = jest.fn();
const mockedGetRecommendations = jest.fn().mockReturnValue(mockProducts);

jest.mock("../../hooks/useProducts", () => () => ({
  preferences: ["preference A", "preference B"],
  features: ["Feature A", "Feature B"],
  products: mockProducts,
}));

jest.mock("../../hooks/useForm", () => () => ({
  formData: {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: "SingleProduct",
  },
  handleChange: mockedHandleChange,
  resetForm: mockedResetForm,
}));

jest.mock("../../hooks/useRecommendations", () => () => ({
  getRecommendations: () => mockedGetRecommendations(),
}));

describe("Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza todos os campos e botões corretamente", () => {
    render(<Form setRecommendations={mockedSetRecommendations} />);

    expect(screen.getByText("Preferências:")).toBeInTheDocument();
    expect(screen.getByText("Funcionalidades:")).toBeInTheDocument();
    expect(screen.getByText("Tipo de Recomendação:")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("remote-filters-button")).toBeInTheDocument();
  });

  it("chama getRecommendations e setRecommendations ao submeter o formulário", () => {
    mockedGetRecommendations.mockReturnValue(mockProducts);

    render(<Form setRecommendations={mockedSetRecommendations} />);

    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(mockedGetRecommendations).toHaveBeenCalled();
    expect(mockedSetRecommendations).toHaveBeenCalledWith(mockProducts);
  });

  it("reseta o formulário e limpa recomendações ao clicar no botão de limpar filtros", () => {
    render(<Form setRecommendations={mockedSetRecommendations} />);

    fireEvent.click(screen.getByTestId("remote-filters-button"));

    expect(mockedResetForm).toHaveBeenCalled();
    expect(mockedSetRecommendations).toHaveBeenCalledWith([]);
  });
});
