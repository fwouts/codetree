// Generated from src/parsers/ast/Ast.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class AstLexer extends Lexer {
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
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "Identifier", 
		"TAB", "LINEBREAK"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "':'", "'('", "')'", "': '", "'?'", "'['", "']'", "'$text'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "Identifier", "TAB", "LINEBREAK"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AstLexer._LITERAL_NAMES, AstLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return AstLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(AstLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "Ast.g4"; }

	@Override
	public get ruleNames(): string[] { return AstLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return AstLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return AstLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\r9\b\x01\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03"+
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03"+
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03"+
		"\n\x03\n\x07\n1\n\n\f\n\x0E\n4\v\n\x03\v\x03\v\x03\f\x03\f\x02\x02\x02"+
		"\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F"+
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03\x02\x06\x04\x02C\\"+
		"c|\x06\x022;C\\aac|\x03\x02\v\v\x03\x02\f\f9\x02\x03\x03\x02\x02\x02\x02"+
		"\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02"+
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11"+
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17"+
		"\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1B\x03\x02\x02\x02\x07\x1D"+
		"\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02\v\"\x03\x02\x02\x02\r$\x03\x02"+
		"\x02\x02\x0F&\x03\x02\x02\x02\x11(\x03\x02\x02\x02\x13.\x03\x02\x02\x02"+
		"\x155\x03\x02\x02\x02\x177\x03\x02\x02\x02\x19\x1A\x07<\x02\x02\x1A\x04"+
		"\x03\x02\x02\x02\x1B\x1C\x07*\x02\x02\x1C\x06\x03\x02\x02\x02\x1D\x1E"+
		"\x07+\x02\x02\x1E\b\x03\x02\x02\x02\x1F \x07<\x02\x02 !\x07\"\x02\x02"+
		"!\n\x03\x02\x02\x02\"#\x07A\x02\x02#\f\x03\x02\x02\x02$%\x07]\x02\x02"+
		"%\x0E\x03\x02\x02\x02&\'\x07_\x02\x02\'\x10\x03\x02\x02\x02()\x07&\x02"+
		"\x02)*\x07v\x02\x02*+\x07g\x02\x02+,\x07z\x02\x02,-\x07v\x02\x02-\x12"+
		"\x03\x02\x02\x02.2\t\x02\x02\x02/1\t\x03\x02\x020/\x03\x02\x02\x0214\x03"+
		"\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x023\x14\x03\x02\x02\x02"+
		"42\x03\x02\x02\x0256\t\x04\x02\x026\x16\x03\x02\x02\x0278\t\x05\x02\x02"+
		"8\x18\x03\x02\x02\x02\x04\x022\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AstLexer.__ATN) {
			AstLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AstLexer._serializedATN));
		}

		return AstLexer.__ATN;
	}

}

