pragma solidity ^0.8.23;

import "../lib/limit-order-protocol/contracts/LimitOrderProtocol.sol";

contract TestLimitOrderProtocol is EIP712("1inch Limit Order Protocol", "4"), Ownable, OrderMixin
{
    // solhint-disable-next-line no-empty-blocks
    constructor(IWETH _weth) OrderMixin(_weth) Ownable(msg.sender) {}
}
