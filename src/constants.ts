export const ZX = '0x'

const ONE_INCH_LIMIT_ORDER_V4 = '0xfde2d93A9D538940A9899CA6bEFa2517D9A0B23f'
const ONE_INCH_LIMIT_ORDER_V4_ZK_SYNC =
    '0x6fd4383cb451173d5f9304f041c7bcbf27d561ff'

export const getLimitOrderContract = (chainId: number): string => {
    if (chainId === 324 /*ZkSync*/) {
        return ONE_INCH_LIMIT_ORDER_V4_ZK_SYNC
    }

    return ONE_INCH_LIMIT_ORDER_V4
}
