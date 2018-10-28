interface Inlet {
  type: string,
  itemName: string,
  isColdable: boolean | null,
  isHottable: boolean | null,
  maxStockNumber: number,
  currentStockNumber: number,
  isSoldOut?: Function,
}

export default Inlet

// 投入口はドリンク用,食べ物用のどちらのタイプの投入口かという情報をもつ
// 投入口はどのドリンク用の投入口かという情報をもつ
// 投入口は冷たい用、暖かい用の二種類の投入口がある。
// 投入口はいくつドリンクを投入できるかのnumberをもつ
// 投入口は今いくつドリンクが投入されているかのnumberをもつ
// 投入口は売り切れフラグをもつ。今投入されているドリンクが0ならフラグがたつ。