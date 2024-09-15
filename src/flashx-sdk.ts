import { DataService } from './services/dataService';
import { TokenService } from './services/tokenService';
import { SwapService } from './services/swapService';
import { TradeService } from './services/tradeService';
import { WalletService } from './services/walletService';
import { UIService } from './services/uiService';
import { SDKOptions } from './types';

export class FlashXSDK {
  private apiKey: string;
  private dataService: DataService;
  private tokenService: TokenService;
  private swapService: SwapService;
  private tradeService: TradeService;
  private walletService: WalletService;
  private uiService: UIService;

  constructor(options: SDKOptions) {
    this.apiKey = options.apiKey;

    // Initialize services
    this.dataService = new DataService(this.apiKey);
    this.tokenService = new TokenService(this.apiKey);
    this.swapService = new SwapService(this.apiKey);
    this.tradeService = new TradeService(this.apiKey);
    this.walletService = new WalletService(this.apiKey);
    this.uiService = new UIService();
  }

  // Methods that utilize the services
  public getData(request: any) {
    return this.dataService.getData(request);
  }

  public detectToken(tokenAddress: string) {
    return this.tokenService.detectToken(tokenAddress);
  }

  public swap(fromToken: string, toToken: string, amount: number) {
    return this.swapService.swap(fromToken, toToken, amount);
  }

  public longShort(position: 'long' | 'short', token: string, amount: number) {
    return this.tradeService.longShort(position, token, amount);
  }

  public transferToken(token: string, toAddress: string, amount: number) {
    return this.walletService.transferToken(token, toAddress, amount);
  }

  public mintNFT(nftContractAddress: string) {
    return this.walletService.mintNFT(nftContractAddress);
  }

  public interactWithWallet(action: string, params: any) {
    return this.walletService.interactWithWallet(action, params);
  }

  public insertCSS(cssString: string) {
    this.uiService.insertCSS(cssString);
  }

  public insertJS(jsString: string) {
    this.uiService.insertJS(jsString);
  }
}
