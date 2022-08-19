export const switchNetwork = async (chainId: number): Promise<boolean> => {
    const provider = (window as any)?.ethereum;
    if (provider) {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params:
                    [{ chainId: `0x${chainId.toString(16)}` }]
            })
        } catch (switchError: any) {
            console.log("switchError", switchError)

        }
    } else {
        console.error(
            "Can't setup the network on metamask because window.ethereum is undefined"
        );
        return false;
    }
    return true
};