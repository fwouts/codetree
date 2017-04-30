// Generated from src/parsers/ast/Ast.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class AstParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly Identifier=9;
	public static readonly TAB=10;
	public static readonly LINEBREAK=11;
	public static readonly RULE_ruleBlocks = 0;
	public static readonly RULE_ruleBlock = 1;
	public static readonly RULE_ruleName = 2;
	public static readonly RULE_ruleValue = 3;
	public static readonly RULE_structValue = 4;
	public static readonly RULE_structField = 5;
	public static readonly RULE_structName = 6;
	public static readonly RULE_structFieldName = 7;
	public static readonly RULE_structFieldValue = 8;
	public static readonly RULE_structFieldValue_single = 9;
	public static readonly RULE_structFieldValue_optional = 10;
	public static readonly RULE_structFieldValue_array = 11;
	public static readonly RULE_textValue = 12;
	public static readonly ruleNames: string[] = [
		"ruleBlocks", "ruleBlock", "ruleName", "ruleValue", "structValue", "structField", 
		"structName", "structFieldName", "structFieldValue", "structFieldValue_single", 
		"structFieldValue_optional", "structFieldValue_array", "textValue"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "':'", "'('", "')'", "': '", "'?'", "'['", "']'", "'$text'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "Identifier", "TAB", "LINEBREAK"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AstParser._LITERAL_NAMES, AstParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return AstParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Ast.g4"; }

	@Override
	public get ruleNames(): string[] { return AstParser.ruleNames; }

	@Override
	public get serializedATN(): string { return AstParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AstParser._ATN, this);
	}
	@RuleVersion(0)
	public ruleBlocks(): RuleBlocksContext {
		let _localctx: RuleBlocksContext = new RuleBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AstParser.RULE_ruleBlocks);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AstParser.Identifier) {
				{
				{
				this.state = 26;
				this.ruleBlock();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ruleBlock(): RuleBlockContext {
		let _localctx: RuleBlockContext = new RuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AstParser.RULE_ruleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.ruleName();
			this.state = 33;
			this.match(AstParser.T__0);
			this.state = 34;
			this.match(AstParser.LINEBREAK);
			this.state = 35;
			this.ruleValue();
			this.state = 36;
			this.match(AstParser.LINEBREAK);
			this.state = 37;
			_la = this._input.LA(1);
			if ( !(_la===AstParser.EOF || _la===AstParser.LINEBREAK) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ruleName(): RuleNameContext {
		let _localctx: RuleNameContext = new RuleNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AstParser.RULE_ruleName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(AstParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ruleValue(): RuleValueContext {
		let _localctx: RuleValueContext = new RuleValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AstParser.RULE_ruleValue);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.structValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.textValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structValue(): StructValueContext {
		let _localctx: StructValueContext = new StructValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AstParser.RULE_structValue);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(AstParser.TAB);
			this.state = 46;
			this.structName();
			this.state = 47;
			this.match(AstParser.T__1);
			this.state = 48;
			this.match(AstParser.LINEBREAK);
			this.state = 52;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 49;
					this.structField();
					}
					} 
				}
				this.state = 54;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			}
			this.state = 55;
			this.match(AstParser.TAB);
			this.state = 56;
			this.match(AstParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structField(): StructFieldContext {
		let _localctx: StructFieldContext = new StructFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AstParser.RULE_structField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(AstParser.TAB);
			this.state = 59;
			this.match(AstParser.TAB);
			this.state = 60;
			this.structFieldName();
			this.state = 61;
			this.match(AstParser.T__3);
			this.state = 62;
			this.structFieldValue();
			this.state = 63;
			this.match(AstParser.LINEBREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structName(): StructNameContext {
		let _localctx: StructNameContext = new StructNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AstParser.RULE_structName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(AstParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structFieldName(): StructFieldNameContext {
		let _localctx: StructFieldNameContext = new StructFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AstParser.RULE_structFieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(AstParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structFieldValue(): StructFieldValueContext {
		let _localctx: StructFieldValueContext = new StructFieldValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AstParser.RULE_structFieldValue);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AstParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				this.structFieldValue_optional();
				}
				break;
			case AstParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				this.structFieldValue_single();
				}
				break;
			case AstParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 71;
				this.structFieldValue_array();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structFieldValue_single(): StructFieldValue_singleContext {
		let _localctx: StructFieldValue_singleContext = new StructFieldValue_singleContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AstParser.RULE_structFieldValue_single);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.ruleName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structFieldValue_optional(): StructFieldValue_optionalContext {
		let _localctx: StructFieldValue_optionalContext = new StructFieldValue_optionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AstParser.RULE_structFieldValue_optional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(AstParser.T__4);
			this.state = 77;
			this.ruleName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structFieldValue_array(): StructFieldValue_arrayContext {
		let _localctx: StructFieldValue_arrayContext = new StructFieldValue_arrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AstParser.RULE_structFieldValue_array);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(AstParser.T__5);
			this.state = 80;
			this.ruleName();
			this.state = 81;
			this.match(AstParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public textValue(): TextValueContext {
		let _localctx: TextValueContext = new TextValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AstParser.RULE_textValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(AstParser.TAB);
			this.state = 84;
			this.match(AstParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\rY\x04\x02\t"+
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t"+
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E"+
		"\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x03\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05"+
		"\x05\x05.\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x065\n\x06"+
		"\f\x06\x0E\x068\v\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03"+
		"\n\x05\nK\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03"+
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b"+
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02"+
		"\x02\x03\x03\x03\r\rP\x02\x1F\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06"+
		")\x03\x02\x02\x02\b-\x03\x02\x02\x02\n/\x03\x02\x02\x02\f<\x03\x02\x02"+
		"\x02\x0EC\x03\x02\x02\x02\x10E\x03\x02\x02\x02\x12J\x03\x02\x02\x02\x14"+
		"L\x03\x02\x02\x02\x16N\x03\x02\x02\x02\x18Q\x03\x02\x02\x02\x1AU\x03\x02"+
		"\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02"+
		"\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03\x03\x02\x02"+
		"\x02!\x1F\x03\x02\x02\x02\"#\x05\x06\x04\x02#$\x07\x03\x02\x02$%\x07\r"+
		"\x02\x02%&\x05\b\x05\x02&\'\x07\r\x02\x02\'(\t\x02\x02\x02(\x05\x03\x02"+
		"\x02\x02)*\x07\v\x02\x02*\x07\x03\x02\x02\x02+.\x05\n\x06\x02,.\x05\x1A"+
		"\x0E\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\t\x03\x02\x02\x02/0\x07"+
		"\f\x02\x0201\x05\x0E\b\x0212\x07\x04\x02\x0226\x07\r\x02\x0235\x05\f\x07"+
		"\x0243\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02"+
		"\x0279\x03\x02\x02\x0286\x03\x02\x02\x029:\x07\f\x02\x02:;\x07\x05\x02"+
		"\x02;\v\x03\x02\x02\x02<=\x07\f\x02\x02=>\x07\f\x02\x02>?\x05\x10\t\x02"+
		"?@\x07\x06\x02\x02@A\x05\x12\n\x02AB\x07\r\x02\x02B\r\x03\x02\x02\x02"+
		"CD\x07\v\x02\x02D\x0F\x03\x02\x02\x02EF\x07\v\x02\x02F\x11\x03\x02\x02"+
		"\x02GK\x05\x16\f\x02HK\x05\x14\v\x02IK\x05\x18\r\x02JG\x03\x02\x02\x02"+
		"JH\x03\x02\x02\x02JI\x03\x02\x02\x02K\x13\x03\x02\x02\x02LM\x05\x06\x04"+
		"\x02M\x15\x03\x02\x02\x02NO\x07\x07\x02\x02OP\x05\x06\x04\x02P\x17\x03"+
		"\x02\x02\x02QR\x07\b\x02\x02RS\x05\x06\x04\x02ST\x07\t\x02\x02T\x19\x03"+
		"\x02\x02\x02UV\x07\f\x02\x02VW\x07\n\x02\x02W\x1B\x03\x02\x02\x02\x06"+
		"\x1F-6J";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AstParser.__ATN) {
			AstParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AstParser._serializedATN));
		}

		return AstParser.__ATN;
	}

}

export class RuleBlocksContext extends ParserRuleContext {
	public ruleBlock(): RuleBlockContext[];
	public ruleBlock(i: number): RuleBlockContext;
	public ruleBlock(i?: number): RuleBlockContext | RuleBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleBlockContext);
		} else {
			return this.getRuleContext(i, RuleBlockContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_ruleBlocks; }
}


export class RuleBlockContext extends ParserRuleContext {
	public ruleName(): RuleNameContext {
		return this.getRuleContext(0, RuleNameContext);
	}
	public LINEBREAK(): TerminalNode[];
	public LINEBREAK(i: number): TerminalNode;
	public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AstParser.LINEBREAK);
		} else {
			return this.getToken(AstParser.LINEBREAK, i);
		}
	}
	public ruleValue(): RuleValueContext {
		return this.getRuleContext(0, RuleValueContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(AstParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_ruleBlock; }
}


export class RuleNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(AstParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_ruleName; }
}


export class RuleValueContext extends ParserRuleContext {
	public structValue(): StructValueContext | undefined {
		return this.tryGetRuleContext(0, StructValueContext);
	}
	public textValue(): TextValueContext | undefined {
		return this.tryGetRuleContext(0, TextValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_ruleValue; }
}


export class StructValueContext extends ParserRuleContext {
	public TAB(): TerminalNode[];
	public TAB(i: number): TerminalNode;
	public TAB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AstParser.TAB);
		} else {
			return this.getToken(AstParser.TAB, i);
		}
	}
	public structName(): StructNameContext {
		return this.getRuleContext(0, StructNameContext);
	}
	public LINEBREAK(): TerminalNode { return this.getToken(AstParser.LINEBREAK, 0); }
	public structField(): StructFieldContext[];
	public structField(i: number): StructFieldContext;
	public structField(i?: number): StructFieldContext | StructFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructFieldContext);
		} else {
			return this.getRuleContext(i, StructFieldContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structValue; }
}


export class StructFieldContext extends ParserRuleContext {
	public TAB(): TerminalNode[];
	public TAB(i: number): TerminalNode;
	public TAB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AstParser.TAB);
		} else {
			return this.getToken(AstParser.TAB, i);
		}
	}
	public structFieldName(): StructFieldNameContext {
		return this.getRuleContext(0, StructFieldNameContext);
	}
	public structFieldValue(): StructFieldValueContext {
		return this.getRuleContext(0, StructFieldValueContext);
	}
	public LINEBREAK(): TerminalNode { return this.getToken(AstParser.LINEBREAK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structField; }
}


export class StructNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(AstParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structName; }
}


export class StructFieldNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(AstParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structFieldName; }
}


export class StructFieldValueContext extends ParserRuleContext {
	public structFieldValue_optional(): StructFieldValue_optionalContext | undefined {
		return this.tryGetRuleContext(0, StructFieldValue_optionalContext);
	}
	public structFieldValue_single(): StructFieldValue_singleContext | undefined {
		return this.tryGetRuleContext(0, StructFieldValue_singleContext);
	}
	public structFieldValue_array(): StructFieldValue_arrayContext | undefined {
		return this.tryGetRuleContext(0, StructFieldValue_arrayContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structFieldValue; }
}


export class StructFieldValue_singleContext extends ParserRuleContext {
	public ruleName(): RuleNameContext {
		return this.getRuleContext(0, RuleNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structFieldValue_single; }
}


export class StructFieldValue_optionalContext extends ParserRuleContext {
	public ruleName(): RuleNameContext {
		return this.getRuleContext(0, RuleNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structFieldValue_optional; }
}


export class StructFieldValue_arrayContext extends ParserRuleContext {
	public ruleName(): RuleNameContext {
		return this.getRuleContext(0, RuleNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_structFieldValue_array; }
}


export class TextValueContext extends ParserRuleContext {
	public TAB(): TerminalNode { return this.getToken(AstParser.TAB, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AstParser.RULE_textValue; }
}


