import * as opcodes from './OperationCodes'
import {reg8, flags} from './Memory'
import {PrefixedOperationCodesMapping as prefixedOpcodes} from './PrefixedOperationCodesMapping'

export const OperationCodesMapping = [
  //0X00
  opcodes.NOP,
  opcodes.LD_XY_d16.bind(undefined, reg8.B, reg8.C),
  opcodes.LD_mXY_Z.bind(undefined, reg8.B, reg8.C, reg8.A),
  opcodes.INC_XY.bind(undefined, reg8.B, reg8.C),
  opcodes.INC_X.bind(undefined, reg8.B),
  opcodes.DEC_X.bind(undefined, reg8.B),
  opcodes.LD_X_d8.bind(undefined, reg8.B),
  opcodes.RLC_X.bind(undefined, reg8.A),
  opcodes.LD_a16_SP,
  opcodes.ADD_XY_ZQ.bind(undefined, reg8.H, reg8.L, reg8.B, reg8.C),
  opcodes.LD_X_mYZ.bind(undefined, reg8.A, reg8.B, reg8.C),
  opcodes.DEC_XY.bind(undefined, reg8.B, reg8.C),
  opcodes.INC_X.bind(undefined, reg8.C),
  opcodes.DEC_X.bind(undefined, reg8.C),
  opcodes.LD_X_d8.bind(undefined, reg8.C),
  opcodes.RRC_X.bind(undefined, reg8.A),
  //0x10
  opcodes.STOP,
  opcodes.LD_XY_d16.bind(undefined, reg8.D, reg8.E),
  opcodes.LD_mXY_Z.bind(undefined, reg8.D, reg8.E, reg8.A),
  opcodes.INC_XY.bind(undefined, reg8.D, reg8.E),
  opcodes.INC_X.bind(undefined, reg8.D),
  opcodes.DEC_X.bind(undefined, reg8.D),
  opcodes.LD_X_d8.bind(undefined, reg8.D),
  opcodes.RL_X.bind(undefined, reg8.A),
  opcodes.JR_r8,
  opcodes.ADD_XY_ZQ.bind(undefined, reg8.H, reg8.L, reg8.D, reg8.E),
  opcodes.LD_X_mYZ.bind(undefined, reg8.A, reg8.D, reg8.E),
  opcodes.DEC_XY.bind(undefined, reg8.D, reg8.E),
  opcodes.INC_X.bind(undefined, reg8.E),
  opcodes.DEC_X.bind(undefined, reg8.E),
  opcodes.LD_X_d8.bind(undefined, reg8.E),
  opcodes.RR_X,
  //0x20
  opcodes.JR_SF_r8.bind(undefined, false, flags.zero),
  opcodes.LD_XY_d16.bind(undefined, reg8.H, reg8.L),
  opcodes.LD_N_mXY_Z.bind(undefined,1, reg8.H, reg8.L, reg8.A),
  opcodes.INC_XY.bind(undefined, reg8.H, reg8.L),
  opcodes.INC_X.bind(undefined, reg8.H),
  opcodes.DEC_X.bind(undefined, reg8.H),
  opcodes.LD_X_d8.bind(undefined, reg8.H),
  opcodes.DAX.bind(undefined, reg8.A),
  opcodes.JR_SF_r8.bind(undefined, true, flags.zero),
  opcodes.ADD_XY_ZQ.bind(undefined, reg8.H, reg8.L, reg8.H, reg8.L),
  opcodes.LD_N_X_mYZ.bind(undefined,1, reg8.A, reg8.H, reg8.L),
  opcodes.DEC_XY.bind(undefined, reg8.H, reg8.L),
  opcodes.INC_X.bind(undefined, reg8.L),
  opcodes.DEC_X.bind(undefined, reg8.L),
  opcodes.LD_X_d8.bind(undefined, reg8.L),
  opcodes.CPL_X.bind(undefined, reg8.A),
  //0x30
  opcodes.JR_SF_r8.bind(undefined, false, flags.carry),
  opcodes.LD_XY_d16.bind(undefined, reg8.S, reg8.P),
  opcodes.LD_N_mXY_Z.bind(undefined, -1, reg8.H, reg8.L, reg8.A),
  opcodes.INC_XY.bind(undefined, reg8.S, reg8.P),
  opcodes.INC_mXY.bind(undefined, reg8.H, reg8.L),
  opcodes.DEC_mXY.bind(undefined, reg8.H, reg8.L),
  opcodes.LD_mXY_d8.bind(undefined, reg8.H, reg8.L),
  opcodes.SCF,
  opcodes.JR_SF_r8.bind(undefined, true, flags.carry),
  opcodes.ADD_XY_ZQ.bind(undefined, reg8.H, reg8.L, reg8.S, reg8.P),
  opcodes.LD_N_X_mYZ.bind(undefined,-1,reg8.A,reg8.H, reg8.L),
  opcodes.DEC_XY.bind(undefined, reg8.S, reg8.P),
  opcodes.INC_X.bind(undefined, reg8.A),
  opcodes.DEC_X.bind(undefined, reg8.A),
  opcodes.LD_X_d8.bind(undefined, reg8.A),
  opcodes.CCF,
  //0x40
  opcodes.LD_X_Y.bind(undefined, reg8.B, reg8.B),
  opcodes.LD_X_Y.bind(undefined, reg8.B, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.B, reg8.E),
  opcodes.LD_X_Y.bind(undefined, reg8.B, reg8.D),
  opcodes.LD_X_Y.bind(undefined, reg8.B, reg8.H),
  opcodes.LD_X_Y.bind(undefined, reg8.B, reg8.L),
  opcodes.LD_X_mYZ.bind(undefined, reg8.B, reg8.H, reg8.L),
  opcodes.LD_X_Y.bind(undefined, reg8.B, reg8.A),
  opcodes.LD_X_Y.bind(undefined, reg8.C, reg8.B),
  opcodes.LD_X_Y.bind(undefined, reg8.C, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.C, reg8.D),
  opcodes.LD_X_Y.bind(undefined, reg8.C, reg8.E),
  opcodes.LD_X_Y.bind(undefined, reg8.C, reg8.H),
  opcodes.LD_X_Y.bind(undefined, reg8.C, reg8.L),
  opcodes.LD_X_mYZ.bind(undefined, reg8.C, reg8.H, reg8.L),
  opcodes.LD_X_Y.bind(undefined, reg8.C, reg8.A),
  //0x50
  opcodes.LD_X_Y.bind(undefined, reg8.D, reg8.B),
  opcodes.LD_X_Y.bind(undefined, reg8.D, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.D, reg8.E),
  opcodes.LD_X_Y.bind(undefined, reg8.D, reg8.D),
  opcodes.LD_X_Y.bind(undefined, reg8.D, reg8.H),
  opcodes.LD_X_Y.bind(undefined, reg8.D, reg8.L),
  opcodes.LD_X_mYZ.bind(undefined, reg8.D, reg8.H, reg8.L),
  opcodes.LD_X_Y.bind(undefined, reg8.D, reg8.A),
  opcodes.LD_X_Y.bind(undefined, reg8.E, reg8.B),
  opcodes.LD_X_Y.bind(undefined, reg8.E, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.E, reg8.D),
  opcodes.LD_X_Y.bind(undefined, reg8.E, reg8.E),
  opcodes.LD_X_Y.bind(undefined, reg8.E, reg8.H),
  opcodes.LD_X_Y.bind(undefined, reg8.E, reg8.L),
  opcodes.LD_X_mYZ.bind(undefined, reg8.E, reg8.H, reg8.L),
  opcodes.LD_X_Y.bind(undefined, reg8.E, reg8.A),
  //0x60
  opcodes.LD_X_Y.bind(undefined, reg8.H, reg8.B),
  opcodes.LD_X_Y.bind(undefined, reg8.H, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.H, reg8.E),
  opcodes.LD_X_Y.bind(undefined, reg8.H, reg8.D),
  opcodes.LD_X_Y.bind(undefined, reg8.H, reg8.H),
  opcodes.LD_X_Y.bind(undefined, reg8.H, reg8.L),
  opcodes.LD_X_mYZ.bind(undefined, reg8.H, reg8.H, reg8.L),
  opcodes.LD_X_Y.bind(undefined, reg8.L, reg8.B),
  opcodes.LD_X_Y.bind(undefined, reg8.L, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.L, reg8.D),
  opcodes.LD_X_Y.bind(undefined, reg8.L, reg8.E),
  opcodes.LD_X_Y.bind(undefined, reg8.L, reg8.H),
  opcodes.LD_X_Y.bind(undefined, reg8.L, reg8.L),
  opcodes.LD_X_mYZ.bind(undefined, reg8.L, reg8.H, reg8.L),
  opcodes.LD_X_Y.bind(undefined, reg8.L, reg8.A),
  //0x70
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.B),
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.C),
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.D),
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.E),
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.H),
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.L),
  opcodes.HALT,
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.A),
  opcodes.LD_mXY_Z.bind(undefined, reg8.H, reg8.L, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.LD_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.LD_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.LD_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.LD_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.LD_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.LD_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.LD_X_Y.bind(undefined, reg8.A, reg8.A),
  //0x80
  opcodes.ADD_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.ADD_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.ADD_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.ADD_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.ADD_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.ADD_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.ADD_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.ADD_X_Y.bind(undefined, reg8.A, reg8.A),
  opcodes.ADC_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.ADC_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.ADC_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.ADC_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.ADC_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.ADC_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.ADC_X_Y.bind(undefined, reg8.A, reg8.A),
  //0x90
  opcodes.SUB_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.SUB_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.SUB_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.SUB_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.SUB_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.SUB_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.SUB_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.SUB_X_Y.bind(undefined, reg8.A, reg8.A),
  opcodes.SBC_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.SBC_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.SBC_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.SBC_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.SBC_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.SBC_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.SBC_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.SBC_X_Y.bind(undefined, reg8.A, reg8.A),
  //0xA0
  opcodes.AND_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.AND_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.AND_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.AND_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.AND_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.AND_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.AND_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.AND_X_Y.bind(undefined, reg8.A, reg8.A),
  opcodes.XOR_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.XOR_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.XOR_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.XOR_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.XOR_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.XOR_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.XOR_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.XOR_X_Y.bind(undefined, reg8.A, reg8.A),
  //0xB0
  opcodes.OR_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.OR_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.OR_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.OR_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.OR_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.OR_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.OR_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.OR_X_Y.bind(undefined, reg8.A, reg8.A),
  opcodes.CP_X_Y.bind(undefined, reg8.A, reg8.B),
  opcodes.CP_X_Y.bind(undefined, reg8.A, reg8.C),
  opcodes.CP_X_Y.bind(undefined, reg8.A, reg8.D),
  opcodes.CP_X_Y.bind(undefined, reg8.A, reg8.E),
  opcodes.CP_X_Y.bind(undefined, reg8.A, reg8.H),
  opcodes.CP_X_Y.bind(undefined, reg8.A, reg8.L),
  opcodes.CP_X_mYZ.bind(undefined, reg8.A, reg8.H, reg8.L),
  opcodes.CP_X_Y.bind(undefined, reg8.A, reg8.A),
  //0xC0
  opcodes.RET_S_F.bind(undefined, false, flags.zero),
  opcodes.POP_X_Y.bind(undefined, reg8.B, reg8.C),
  opcodes.JP_S_F_a16.bind(undefined, false, flags.zero),
  opcodes.JP_a16,
  opcodes.CALL_S_F_a16.bind(undefined, false, flags.zero),
  opcodes.PUSH_X_Y.bind(undefined, reg8.B, reg8.C),
  opcodes.ADD_X_d8.bind(undefined, reg8.A),
  opcodes.RST_p.bind(undefined, 0x0000),
  opcodes.RET_S_F.bind(undefined, true, flags.zero),
  opcodes.RET,
  opcodes.JP_S_F_a16.bind(undefined, true, flags.zero),
  opcodes.PREFIX_CB.bind(undefined, prefixedOpcodes),
  opcodes.CALL_S_F_a16.bind(undefined, true, flags.zero),
  opcodes.CALL_a16,
  opcodes.ADC_X_d8,
  opcodes.RST_p.bind(undefined, 0x0008),
  //0xD0
  opcodes.RET_S_F.bind(undefined, false, flags.carry),
  opcodes.POP_X_Y.bind(undefined, reg8.D, reg8.E),
  opcodes.JP_S_F_a16.bind(undefined, false, flags.carry),
  opcodes.ILLEGAL,
  opcodes.CALL_S_F_a16.bind(undefined, false, flags.carry),
  opcodes.PUSH_X_Y.bind(undefined, reg8.D, reg8.E),
  opcodes.SUB_X_d8,
  opcodes.RST_p.bind(undefined, 0x0010),
  opcodes.RET_S_F.bind(undefined, true, flags.carry),
  opcodes.RETI,
  opcodes.JP_S_F_a16.bind(undefined, true, flags.carry),
  opcodes.ILLEGAL,
  opcodes.CALL_S_F_a16.bind(undefined, true, flags.carry),
  opcodes.ILLEGAL,
  opcodes.SBC_X_d8.bind(undefined, reg8),
  opcodes.RST_p.bind(undefined, 0x0018),
  //0xE0
  opcodes.LDH_ma8_X.bind(undefined, reg8.A),
  opcodes.POP_X_Y.bind(undefined, reg8.H, reg8.L),
  opcodes.LD_mX_Y.bind(undefined, reg8.C, reg8.A),
  opcodes.ILLEGAL,
  opcodes.ILLEGAL,
  opcodes.PUSH_X_Y.bind(undefined, reg8.H, reg8.L),
  opcodes.AND_X_d8.bind(undefined, reg8.A),
  opcodes.RST_p.bind(undefined, 0x0020),
  opcodes.ADD_SP_r8.bind(undefined, reg8.S, reg8.P),
  opcodes.JP_mXY.bind(undefined, reg8.H, reg8.L), //?!
  opcodes.LD_ma16_X.bind(undefined, reg8.A),
  opcodes.ILLEGAL,
  opcodes.ILLEGAL,
  opcodes.ILLEGAL,
  opcodes.XOR_X_d8.bind(undefined, reg8.A),
  opcodes.RST_p.bind(undefined, 0x0028),
  //0xF0
  opcodes.LDH_X_ma8.bind(undefined, reg8.A),
  opcodes.POP_X_Y.bind(undefined, reg8.A, reg8.F),
  opcodes.LD_X_mY.bind(undefined, reg8.A, reg8.C),
  opcodes.DI,
  opcodes.ILLEGAL,
  opcodes.PUSH_X_Y.bind(undefined, reg8.A, reg8.F),
  opcodes.OR_X_d8.bind(undefined, reg8.A),
  opcodes.RST_p.bind(undefined, 0x0030),
  opcodes.LD_XY_SP_r8.bind(undefined, reg8.H, reg8.L),
  opcodes.LD_SP_XY.bind(undefined, reg8.H, reg8.L),
  opcodes.LD_X_ma16.bind(undefined, reg8.A),
  opcodes.EI,
  opcodes.ILLEGAL,
  opcodes.ILLEGAL,
  opcodes.CP_X_d8.bind(undefined, reg8.A),
  opcodes.RST_p.bind(undefined, 0x0038)
]