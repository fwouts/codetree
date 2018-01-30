// Generated from JavaParser.g4 by ANTLR 4.6-SNAPSHOT


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


export class JavaParser extends Parser {
	public static readonly ABSTRACT=1;
	public static readonly ASSERT=2;
	public static readonly BOOLEAN=3;
	public static readonly BREAK=4;
	public static readonly BYTE=5;
	public static readonly CASE=6;
	public static readonly CATCH=7;
	public static readonly CHAR=8;
	public static readonly CLASS=9;
	public static readonly CONST=10;
	public static readonly CONTINUE=11;
	public static readonly DEFAULT=12;
	public static readonly DO=13;
	public static readonly DOUBLE=14;
	public static readonly ELSE=15;
	public static readonly ENUM=16;
	public static readonly EXTENDS=17;
	public static readonly FINAL=18;
	public static readonly FINALLY=19;
	public static readonly FLOAT=20;
	public static readonly FOR=21;
	public static readonly IF=22;
	public static readonly GOTO=23;
	public static readonly IMPLEMENTS=24;
	public static readonly IMPORT=25;
	public static readonly INSTANCEOF=26;
	public static readonly INT=27;
	public static readonly INTERFACE=28;
	public static readonly LONG=29;
	public static readonly NATIVE=30;
	public static readonly NEW=31;
	public static readonly PACKAGE=32;
	public static readonly PRIVATE=33;
	public static readonly PROTECTED=34;
	public static readonly PUBLIC=35;
	public static readonly RETURN=36;
	public static readonly SHORT=37;
	public static readonly STATIC=38;
	public static readonly STRICTFP=39;
	public static readonly SUPER=40;
	public static readonly SWITCH=41;
	public static readonly SYNCHRONIZED=42;
	public static readonly THIS=43;
	public static readonly THROW=44;
	public static readonly THROWS=45;
	public static readonly TRANSIENT=46;
	public static readonly TRY=47;
	public static readonly VOID=48;
	public static readonly VOLATILE=49;
	public static readonly WHILE=50;
	public static readonly DECIMAL_LITERAL=51;
	public static readonly HEX_LITERAL=52;
	public static readonly OCT_LITERAL=53;
	public static readonly BINARY_LITERAL=54;
	public static readonly FLOAT_LITERAL=55;
	public static readonly HEX_FLOAT_LITERAL=56;
	public static readonly BOOL_LITERAL=57;
	public static readonly CHAR_LITERAL=58;
	public static readonly STRING_LITERAL=59;
	public static readonly NULL_LITERAL=60;
	public static readonly LPAREN=61;
	public static readonly RPAREN=62;
	public static readonly LBRACE=63;
	public static readonly RBRACE=64;
	public static readonly LBRACK=65;
	public static readonly RBRACK=66;
	public static readonly SEMI=67;
	public static readonly COMMA=68;
	public static readonly DOT=69;
	public static readonly ASSIGN=70;
	public static readonly GT=71;
	public static readonly LT=72;
	public static readonly BANG=73;
	public static readonly TILDE=74;
	public static readonly QUESTION=75;
	public static readonly COLON=76;
	public static readonly EQUAL=77;
	public static readonly LE=78;
	public static readonly GE=79;
	public static readonly NOTEQUAL=80;
	public static readonly AND=81;
	public static readonly OR=82;
	public static readonly INC=83;
	public static readonly DEC=84;
	public static readonly ADD=85;
	public static readonly SUB=86;
	public static readonly MUL=87;
	public static readonly DIV=88;
	public static readonly BITAND=89;
	public static readonly BITOR=90;
	public static readonly CARET=91;
	public static readonly MOD=92;
	public static readonly ADD_ASSIGN=93;
	public static readonly SUB_ASSIGN=94;
	public static readonly MUL_ASSIGN=95;
	public static readonly DIV_ASSIGN=96;
	public static readonly AND_ASSIGN=97;
	public static readonly OR_ASSIGN=98;
	public static readonly XOR_ASSIGN=99;
	public static readonly MOD_ASSIGN=100;
	public static readonly LSHIFT_ASSIGN=101;
	public static readonly RSHIFT_ASSIGN=102;
	public static readonly URSHIFT_ASSIGN=103;
	public static readonly ARROW=104;
	public static readonly COLONCOLON=105;
	public static readonly AT=106;
	public static readonly ELLIPSIS=107;
	public static readonly WS=108;
	public static readonly COMMENT=109;
	public static readonly LINE_COMMENT=110;
	public static readonly IDENTIFIER=111;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_classOrInterfaceModifier = 5;
	public static readonly RULE_variableModifier = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_typeParameters = 8;
	public static readonly RULE_typeParameter = 9;
	public static readonly RULE_typeBound = 10;
	public static readonly RULE_enumDeclaration = 11;
	public static readonly RULE_enumConstants = 12;
	public static readonly RULE_enumConstant = 13;
	public static readonly RULE_enumBodyDeclarations = 14;
	public static readonly RULE_interfaceDeclaration = 15;
	public static readonly RULE_classBody = 16;
	public static readonly RULE_interfaceBody = 17;
	public static readonly RULE_classBodyDeclaration = 18;
	public static readonly RULE_memberDeclaration = 19;
	public static readonly RULE_methodDeclaration = 20;
	public static readonly RULE_methodBody = 21;
	public static readonly RULE_typeTypeOrVoid = 22;
	public static readonly RULE_genericMethodDeclaration = 23;
	public static readonly RULE_genericConstructorDeclaration = 24;
	public static readonly RULE_constructorDeclaration = 25;
	public static readonly RULE_fieldDeclaration = 26;
	public static readonly RULE_interfaceBodyDeclaration = 27;
	public static readonly RULE_interfaceMemberDeclaration = 28;
	public static readonly RULE_constDeclaration = 29;
	public static readonly RULE_constantDeclarator = 30;
	public static readonly RULE_interfaceMethodDeclaration = 31;
	public static readonly RULE_interfaceMethodModifier = 32;
	public static readonly RULE_genericInterfaceMethodDeclaration = 33;
	public static readonly RULE_variableDeclarators = 34;
	public static readonly RULE_variableDeclarator = 35;
	public static readonly RULE_variableDeclaratorId = 36;
	public static readonly RULE_variableInitializer = 37;
	public static readonly RULE_arrayInitializer = 38;
	public static readonly RULE_classOrInterfaceType = 39;
	public static readonly RULE_typeArgument = 40;
	public static readonly RULE_qualifiedNameList = 41;
	public static readonly RULE_formalParameters = 42;
	public static readonly RULE_formalParameterList = 43;
	public static readonly RULE_formalParameter = 44;
	public static readonly RULE_lastFormalParameter = 45;
	public static readonly RULE_qualifiedName = 46;
	public static readonly RULE_literal = 47;
	public static readonly RULE_integerLiteral = 48;
	public static readonly RULE_floatLiteral = 49;
	public static readonly RULE_annotation = 50;
	public static readonly RULE_elementValuePairs = 51;
	public static readonly RULE_elementValuePair = 52;
	public static readonly RULE_elementValue = 53;
	public static readonly RULE_elementValueArrayInitializer = 54;
	public static readonly RULE_annotationTypeDeclaration = 55;
	public static readonly RULE_annotationTypeBody = 56;
	public static readonly RULE_annotationTypeElementDeclaration = 57;
	public static readonly RULE_annotationTypeElementRest = 58;
	public static readonly RULE_annotationMethodOrConstantRest = 59;
	public static readonly RULE_annotationMethodRest = 60;
	public static readonly RULE_annotationConstantRest = 61;
	public static readonly RULE_defaultValue = 62;
	public static readonly RULE_block = 63;
	public static readonly RULE_blockStatement = 64;
	public static readonly RULE_localVariableDeclaration = 65;
	public static readonly RULE_localTypeDeclaration = 66;
	public static readonly RULE_statement = 67;
	public static readonly RULE_catchClause = 68;
	public static readonly RULE_catchType = 69;
	public static readonly RULE_finallyBlock = 70;
	public static readonly RULE_resourceSpecification = 71;
	public static readonly RULE_resources = 72;
	public static readonly RULE_resource = 73;
	public static readonly RULE_switchBlockStatementGroup = 74;
	public static readonly RULE_switchLabel = 75;
	public static readonly RULE_forControl = 76;
	public static readonly RULE_forInit = 77;
	public static readonly RULE_enhancedForControl = 78;
	public static readonly RULE_parExpression = 79;
	public static readonly RULE_expressionList = 80;
	public static readonly RULE_expression = 81;
	public static readonly RULE_lambdaExpression = 82;
	public static readonly RULE_lambdaParameters = 83;
	public static readonly RULE_lambdaBody = 84;
	public static readonly RULE_primary = 85;
	public static readonly RULE_classType = 86;
	public static readonly RULE_creator = 87;
	public static readonly RULE_createdName = 88;
	public static readonly RULE_innerCreator = 89;
	public static readonly RULE_arrayCreatorRest = 90;
	public static readonly RULE_classCreatorRest = 91;
	public static readonly RULE_explicitGenericInvocation = 92;
	public static readonly RULE_typeArgumentsOrDiamond = 93;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 94;
	public static readonly RULE_nonWildcardTypeArguments = 95;
	public static readonly RULE_typeList = 96;
	public static readonly RULE_typeType = 97;
	public static readonly RULE_primitiveType = 98;
	public static readonly RULE_typeArguments = 99;
	public static readonly RULE_superSuffix = 100;
	public static readonly RULE_explicitGenericInvocationSuffix = 101;
	public static readonly RULE_arguments = 102;
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
		"typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants", 
		"enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "classBody", 
		"interfaceBody", "classBodyDeclaration", "memberDeclaration", "methodDeclaration", 
		"methodBody", "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration", 
		"constructorDeclaration", "fieldDeclaration", "interfaceBodyDeclaration", 
		"interfaceMemberDeclaration", "constDeclaration", "constantDeclarator", 
		"interfaceMethodDeclaration", "interfaceMethodModifier", "genericInterfaceMethodDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "classOrInterfaceType", "typeArgument", "qualifiedNameList", 
		"formalParameters", "formalParameterList", "formalParameter", "lastFormalParameter", 
		"qualifiedName", "literal", "integerLiteral", "floatLiteral", "annotation", 
		"elementValuePairs", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"annotationTypeDeclaration", "annotationTypeBody", "annotationTypeElementDeclaration", 
		"annotationTypeElementRest", "annotationMethodOrConstantRest", "annotationMethodRest", 
		"annotationConstantRest", "defaultValue", "block", "blockStatement", "localVariableDeclaration", 
		"localTypeDeclaration", "statement", "catchClause", "catchType", "finallyBlock", 
		"resourceSpecification", "resources", "resource", "switchBlockStatementGroup", 
		"switchLabel", "forControl", "forInit", "enhancedForControl", "parExpression", 
		"expressionList", "expression", "lambdaExpression", "lambdaParameters", 
		"lambdaBody", "primary", "classType", "creator", "createdName", "innerCreator", 
		"arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", "typeArgumentsOrDiamond", 
		"nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", "typeList", 
		"typeType", "primitiveType", "typeArguments", "superSuffix", "explicitGenericInvocationSuffix", 
		"arguments"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", 
		"'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
		"'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
		"'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
		"'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'", 
		"'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'", 
		"'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", 
		"'transient'", "'try'", "'void'", "'volatile'", "'while'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
		"','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", 
		"'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", 
		"'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", 
		"'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", 
		"'@'", "'...'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
		"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
		"ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", 
		"IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", 
		"SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", 
		"TRY", "VOID", "VOLATILE", "WHILE", "DECIMAL_LITERAL", "HEX_LITERAL", 
		"OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "NULL_LITERAL", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", 
		"ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", 
		"GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", 
		"BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
		"DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", "AT", "ELLIPSIS", 
		"WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return JavaParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "JavaParser.g4"; }

	@Override
	public get ruleNames(): string[] { return JavaParser.ruleNames; }

	@Override
	public get serializedATN(): string { return JavaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaParser._ATN, this);
	}
	@RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
			case 1:
				{
				this.state = 206;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.IMPORT) {
				{
				{
				this.state = 209;
				this.importDeclaration();
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la===JavaParser.SEMI || _la===JavaParser.AT) {
				{
				{
				this.state = 215;
				this.typeDeclaration();
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
			this.match(JavaParser.EOF);
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
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.AT) {
				{
				{
				this.state = 223;
				this.annotation();
				}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 229;
			this.match(JavaParser.PACKAGE);
			this.state = 230;
			this.qualifiedName();
			this.state = 231;
			this.match(JavaParser.SEMI);
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
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(JavaParser.IMPORT);
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.STATIC) {
				{
				this.state = 234;
				this.match(JavaParser.STATIC);
				}
			}

			this.state = 237;
			this.qualifiedName();
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.DOT) {
				{
				this.state = 238;
				this.match(JavaParser.DOT);
				this.state = 239;
				this.match(JavaParser.MUL);
				}
			}

			this.state = 242;
			this.match(JavaParser.SEMI);
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
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.CLASS:
			case JavaParser.ENUM:
			case JavaParser.FINAL:
			case JavaParser.INTERFACE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 244;
						this.classOrInterfaceModifier();
						}
						} 
					}
					this.state = 249;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
				}
				this.state = 254;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CLASS:
					{
					this.state = 250;
					this.classDeclaration();
					}
					break;
				case JavaParser.ENUM:
					{
					this.state = 251;
					this.enumDeclaration();
					}
					break;
				case JavaParser.INTERFACE:
					{
					this.state = 252;
					this.interfaceDeclaration();
					}
					break;
				case JavaParser.AT:
					{
					this.state = 253;
					this.annotationTypeDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.match(JavaParser.SEMI);
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
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaParser.RULE_modifier);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.FINAL:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 259;
				this.classOrInterfaceModifier();
				}
				break;
			case JavaParser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 260;
				this.match(JavaParser.NATIVE);
				}
				break;
			case JavaParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.match(JavaParser.SYNCHRONIZED);
				}
				break;
			case JavaParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 262;
				this.match(JavaParser.TRANSIENT);
				}
				break;
			case JavaParser.VOLATILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 263;
				this.match(JavaParser.VOLATILE);
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
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 268;
				this.match(JavaParser.PROTECTED);
				}
				break;
			case JavaParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 269;
				this.match(JavaParser.PRIVATE);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 270;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 271;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 272;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 273;
				this.match(JavaParser.STRICTFP);
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
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaParser.RULE_variableModifier);
		try {
			this.state = 278;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.match(JavaParser.FINAL);
				}
				break;
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.annotation();
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(JavaParser.CLASS);
			this.state = 281;
			this.match(JavaParser.IDENTIFIER);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.LT) {
				{
				this.state = 282;
				this.typeParameters();
				}
			}

			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.EXTENDS) {
				{
				this.state = 285;
				this.match(JavaParser.EXTENDS);
				this.state = 286;
				this.typeType();
				}
			}

			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.IMPLEMENTS) {
				{
				this.state = 289;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 290;
				this.typeList();
				}
			}

			this.state = 293;
			this.classBody();
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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(JavaParser.LT);
			this.state = 296;
			this.typeParameter();
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 297;
				this.match(JavaParser.COMMA);
				this.state = 298;
				this.typeParameter();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 304;
			this.match(JavaParser.GT);
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.AT) {
				{
				{
				this.state = 306;
				this.annotation();
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 312;
			this.match(JavaParser.IDENTIFIER);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.EXTENDS) {
				{
				this.state = 313;
				this.match(JavaParser.EXTENDS);
				this.state = 314;
				this.typeBound();
				}
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
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.typeType();
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.BITAND) {
				{
				{
				this.state = 318;
				this.match(JavaParser.BITAND);
				this.state = 319;
				this.typeType();
				}
				}
				this.state = 324;
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
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(JavaParser.ENUM);
			this.state = 326;
			this.match(JavaParser.IDENTIFIER);
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.IMPLEMENTS) {
				{
				this.state = 327;
				this.match(JavaParser.IMPLEMENTS);
				this.state = 328;
				this.typeList();
				}
			}

			this.state = 331;
			this.match(JavaParser.LBRACE);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				this.state = 332;
				this.enumConstants();
				}
			}

			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.COMMA) {
				{
				this.state = 335;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.SEMI) {
				{
				this.state = 338;
				this.enumBodyDeclarations();
				}
			}

			this.state = 341;
			this.match(JavaParser.RBRACE);
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
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.enumConstant();
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 344;
					this.match(JavaParser.COMMA);
					this.state = 345;
					this.enumConstant();
					}
					} 
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
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
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.AT) {
				{
				{
				this.state = 351;
				this.annotation();
				}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 357;
			this.match(JavaParser.IDENTIFIER);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.LPAREN) {
				{
				this.state = 358;
				this.arguments();
				}
			}

			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.LBRACE) {
				{
				this.state = 361;
				this.classBody();
				}
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
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(JavaParser.SEMI);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la===JavaParser.SEMI || _la===JavaParser.LT || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				{
				this.state = 365;
				this.classBodyDeclaration();
				}
				}
				this.state = 370;
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
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(JavaParser.INTERFACE);
			this.state = 372;
			this.match(JavaParser.IDENTIFIER);
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.LT) {
				{
				this.state = 373;
				this.typeParameters();
				}
			}

			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.EXTENDS) {
				{
				this.state = 376;
				this.match(JavaParser.EXTENDS);
				this.state = 377;
				this.typeList();
				}
			}

			this.state = 380;
			this.interfaceBody();
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
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(JavaParser.LBRACE);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || _la===JavaParser.SEMI || _la===JavaParser.LT || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				{
				this.state = 383;
				this.classBodyDeclaration();
				}
				}
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 389;
			this.match(JavaParser.RBRACE);
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
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.match(JavaParser.LBRACE);
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la===JavaParser.SEMI || _la===JavaParser.LT || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				{
				this.state = 392;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 398;
			this.match(JavaParser.RBRACE);
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
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 400;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.STATIC) {
					{
					this.state = 401;
					this.match(JavaParser.STATIC);
					}
				}

				this.state = 404;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 408;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 405;
						this.modifier();
						}
						} 
					}
					this.state = 410;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
				}
				this.state = 411;
				this.memberDeclaration();
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
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaParser.RULE_memberDeclaration);
		try {
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 414;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 415;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 416;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 417;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 418;
				this.genericConstructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 419;
				this.interfaceDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 420;
				this.annotationTypeDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 421;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 422;
				this.enumDeclaration();
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
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.typeTypeOrVoid();
			this.state = 426;
			this.match(JavaParser.IDENTIFIER);
			this.state = 427;
			this.formalParameters();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.LBRACK) {
				{
				{
				this.state = 428;
				this.match(JavaParser.LBRACK);
				this.state = 429;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.THROWS) {
				{
				this.state = 435;
				this.match(JavaParser.THROWS);
				this.state = 436;
				this.qualifiedNameList();
				}
			}

			this.state = 439;
			this.methodBody();
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
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaParser.RULE_methodBody);
		try {
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 441;
				this.block();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.match(JavaParser.SEMI);
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
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaParser.RULE_typeTypeOrVoid);
		try {
			this.state = 447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 445;
				this.typeType();
				}
				break;
			case JavaParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 446;
				this.match(JavaParser.VOID);
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
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.typeParameters();
			this.state = 450;
			this.methodDeclaration();
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
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.typeParameters();
			this.state = 453;
			this.constructorDeclaration();
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
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(JavaParser.IDENTIFIER);
			this.state = 456;
			this.formalParameters();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.THROWS) {
				{
				this.state = 457;
				this.match(JavaParser.THROWS);
				this.state = 458;
				this.qualifiedNameList();
				}
			}

			this.state = 461;
			_localctx._constructorBody = this.block();
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
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.typeType();
			this.state = 464;
			this.variableDeclarators();
			this.state = 465;
			this.match(JavaParser.SEMI);
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
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaParser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 475;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.CLASS:
			case JavaParser.DEFAULT:
			case JavaParser.DOUBLE:
			case JavaParser.ENUM:
			case JavaParser.FINAL:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.INTERFACE:
			case JavaParser.LONG:
			case JavaParser.NATIVE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.SHORT:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.SYNCHRONIZED:
			case JavaParser.TRANSIENT:
			case JavaParser.VOID:
			case JavaParser.VOLATILE:
			case JavaParser.LT:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,41,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 467;
						this.modifier();
						}
						} 
					}
					this.state = 472;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,41,this._ctx);
				}
				this.state = 473;
				this.interfaceMemberDeclaration();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
				this.match(JavaParser.SEMI);
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
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 477;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 478;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 479;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 480;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 481;
				this.annotationTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 482;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 483;
				this.enumDeclaration();
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
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.typeType();
			this.state = 487;
			this.constantDeclarator();
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 488;
				this.match(JavaParser.COMMA);
				this.state = 489;
				this.constantDeclarator();
				}
				}
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 495;
			this.match(JavaParser.SEMI);
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
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(JavaParser.IDENTIFIER);
			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.LBRACK) {
				{
				{
				this.state = 498;
				this.match(JavaParser.LBRACK);
				this.state = 499;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 505;
			this.match(JavaParser.ASSIGN);
			this.state = 506;
			this.variableInitializer();
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
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaParser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 508;
					this.interfaceMethodModifier();
					}
					} 
				}
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
			}
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
			case JavaParser.VOID:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				{
				this.state = 514;
				this.typeTypeOrVoid();
				}
				break;
			case JavaParser.LT:
				{
				this.state = 515;
				this.typeParameters();
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 516;
						this.annotation();
						}
						} 
					}
					this.state = 521;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
				}
				this.state = 522;
				this.typeTypeOrVoid();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 526;
			this.match(JavaParser.IDENTIFIER);
			this.state = 527;
			this.formalParameters();
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.LBRACK) {
				{
				{
				this.state = 528;
				this.match(JavaParser.LBRACK);
				this.state = 529;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.THROWS) {
				{
				this.state = 535;
				this.match(JavaParser.THROWS);
				this.state = 536;
				this.qualifiedNameList();
				}
			}

			this.state = 539;
			this.methodBody();
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
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaParser.RULE_interfaceMethodModifier);
		try {
			this.state = 547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 541;
				this.annotation();
				}
				break;
			case JavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				this.match(JavaParser.PUBLIC);
				}
				break;
			case JavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 543;
				this.match(JavaParser.ABSTRACT);
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 544;
				this.match(JavaParser.DEFAULT);
				}
				break;
			case JavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 545;
				this.match(JavaParser.STATIC);
				}
				break;
			case JavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 546;
				this.match(JavaParser.STRICTFP);
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
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaParser.RULE_genericInterfaceMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.typeParameters();
			this.state = 550;
			this.interfaceMethodDeclaration();
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
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.variableDeclarator();
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 553;
				this.match(JavaParser.COMMA);
				this.state = 554;
				this.variableDeclarator();
				}
				}
				this.state = 559;
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
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this.variableDeclaratorId();
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.ASSIGN) {
				{
				this.state = 561;
				this.match(JavaParser.ASSIGN);
				this.state = 562;
				this.variableInitializer();
				}
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
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(JavaParser.IDENTIFIER);
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.LBRACK) {
				{
				{
				this.state = 566;
				this.match(JavaParser.LBRACK);
				this.state = 567;
				this.match(JavaParser.RBRACK);
				}
				}
				this.state = 572;
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
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaParser.RULE_variableInitializer);
		try {
			this.state = 575;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 573;
				this.arrayInitializer();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.NEW:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.THIS:
			case JavaParser.VOID:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 574;
				this.expression(0);
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
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(JavaParser.LBRACE);
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				this.state = 578;
				this.variableInitializer();
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 579;
						this.match(JavaParser.COMMA);
						this.state = 580;
						this.variableInitializer();
						}
						} 
					}
					this.state = 585;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,56,this._ctx);
				}
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.COMMA) {
					{
					this.state = 586;
					this.match(JavaParser.COMMA);
					}
				}

				}
			}

			this.state = 591;
			this.match(JavaParser.RBRACE);
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
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(JavaParser.IDENTIFIER);
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,59,this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this.typeArguments();
				}
				break;
			}
			this.state = 604;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,61,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 597;
					this.match(JavaParser.DOT);
					this.state = 598;
					this.match(JavaParser.IDENTIFIER);
					this.state = 600;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
					case 1:
						{
						this.state = 599;
						this.typeArguments();
						}
						break;
					}
					}
					} 
				}
				this.state = 606;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,61,this._ctx);
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
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 613;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 607;
				this.typeType();
				}
				break;
			case JavaParser.QUESTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this.match(JavaParser.QUESTION);
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.EXTENDS || _la===JavaParser.SUPER) {
					{
					this.state = 609;
					_la = this._input.LA(1);
					if ( !(_la===JavaParser.EXTENDS || _la===JavaParser.SUPER) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 610;
					this.typeType();
					}
				}

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
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.qualifiedName();
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 616;
				this.match(JavaParser.COMMA);
				this.state = 617;
				this.qualifiedName();
				}
				}
				this.state = 622;
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
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(JavaParser.LPAREN);
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la===JavaParser.SHORT || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				this.state = 624;
				this.formalParameterList();
				}
			}

			this.state = 627;
			this.match(JavaParser.RPAREN);
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
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 642;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,68,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 629;
				this.formalParameter();
				this.state = 634;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 630;
						this.match(JavaParser.COMMA);
						this.state = 631;
						this.formalParameter();
						}
						} 
					}
					this.state = 636;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
				}
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.COMMA) {
					{
					this.state = 637;
					this.match(JavaParser.COMMA);
					this.state = 638;
					this.lastFormalParameter();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 641;
				this.lastFormalParameter();
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
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 644;
					this.variableModifier();
					}
					} 
				}
				this.state = 649;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
			}
			this.state = 650;
			this.typeType();
			this.state = 651;
			this.variableDeclaratorId();
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
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaParser.RULE_lastFormalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 653;
					this.variableModifier();
					}
					} 
				}
				this.state = 658;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			}
			this.state = 659;
			this.typeType();
			this.state = 660;
			this.match(JavaParser.ELLIPSIS);
			this.state = 661;
			this.variableDeclaratorId();
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
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.match(JavaParser.IDENTIFIER);
			this.state = 668;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 664;
					this.match(JavaParser.DOT);
					this.state = 665;
					this.match(JavaParser.IDENTIFIER);
					}
					} 
				}
				this.state = 670;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaParser.RULE_literal);
		try {
			this.state = 677;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 671;
				this.integerLiteral();
				}
				break;
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 672;
				this.floatLiteral();
				}
				break;
			case JavaParser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 673;
				this.match(JavaParser.CHAR_LITERAL);
				}
				break;
			case JavaParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 674;
				this.match(JavaParser.STRING_LITERAL);
				}
				break;
			case JavaParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 675;
				this.match(JavaParser.BOOL_LITERAL);
				}
				break;
			case JavaParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 676;
				this.match(JavaParser.NULL_LITERAL);
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
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			_la = this._input.LA(1);
			if ( !(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.DECIMAL_LITERAL - 51)) | (1 << (JavaParser.HEX_LITERAL - 51)) | (1 << (JavaParser.OCT_LITERAL - 51)) | (1 << (JavaParser.BINARY_LITERAL - 51)))) !== 0)) ) {
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
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			_la = this._input.LA(1);
			if ( !(_la===JavaParser.FLOAT_LITERAL || _la===JavaParser.HEX_FLOAT_LITERAL) ) {
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
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(JavaParser.AT);
			this.state = 684;
			this.qualifiedName();
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.LPAREN) {
				{
				this.state = 685;
				this.match(JavaParser.LPAREN);
				this.state = 688;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,73,this._ctx) ) {
				case 1:
					{
					this.state = 686;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 687;
					this.elementValue();
					}
					break;
				}
				this.state = 690;
				this.match(JavaParser.RPAREN);
				}
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
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.elementValuePair();
			this.state = 698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 694;
				this.match(JavaParser.COMMA);
				this.state = 695;
				this.elementValuePair();
				}
				}
				this.state = 700;
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
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this.match(JavaParser.IDENTIFIER);
			this.state = 702;
			this.match(JavaParser.ASSIGN);
			this.state = 703;
			this.elementValue();
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
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaParser.RULE_elementValue);
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 707;
				this.elementValueArrayInitializer();
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
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(JavaParser.LBRACE);
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				this.state = 711;
				this.elementValue();
				this.state = 716;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 712;
						this.match(JavaParser.COMMA);
						this.state = 713;
						this.elementValue();
						}
						} 
					}
					this.state = 718;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
				}
				}
			}

			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.COMMA) {
				{
				this.state = 721;
				this.match(JavaParser.COMMA);
				}
			}

			this.state = 724;
			this.match(JavaParser.RBRACE);
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
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.match(JavaParser.AT);
			this.state = 727;
			this.match(JavaParser.INTERFACE);
			this.state = 728;
			this.match(JavaParser.IDENTIFIER);
			this.state = 729;
			this.annotationTypeBody();
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
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(JavaParser.LBRACE);
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)))) !== 0) || _la===JavaParser.SEMI || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				{
				this.state = 732;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 738;
			this.match(JavaParser.RBRACE);
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
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, JavaParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 748;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.CLASS:
			case JavaParser.DOUBLE:
			case JavaParser.ENUM:
			case JavaParser.FINAL:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.INTERFACE:
			case JavaParser.LONG:
			case JavaParser.NATIVE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.SHORT:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.SYNCHRONIZED:
			case JavaParser.TRANSIENT:
			case JavaParser.VOLATILE:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 743;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,81,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 740;
						this.modifier();
						}
						} 
					}
					this.state = 745;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,81,this._ctx);
				}
				this.state = 746;
				this.annotationTypeElementRest();
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(JavaParser.SEMI);
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
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JavaParser.RULE_annotationTypeElementRest);
		try {
			this.state = 770;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,87,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 750;
				this.typeType();
				this.state = 751;
				this.annotationMethodOrConstantRest();
				this.state = 752;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 754;
				this.classDeclaration();
				this.state = 756;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,83,this._ctx) ) {
				case 1:
					{
					this.state = 755;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 758;
				this.interfaceDeclaration();
				this.state = 760;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
				case 1:
					{
					this.state = 759;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 762;
				this.enumDeclaration();
				this.state = 764;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
				case 1:
					{
					this.state = 763;
					this.match(JavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 766;
				this.annotationTypeDeclaration();
				this.state = 768;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,86,this._ctx) ) {
				case 1:
					{
					this.state = 767;
					this.match(JavaParser.SEMI);
					}
					break;
				}
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
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,88,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 772;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 773;
				this.annotationConstantRest();
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
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.match(JavaParser.IDENTIFIER);
			this.state = 777;
			this.match(JavaParser.LPAREN);
			this.state = 778;
			this.match(JavaParser.RPAREN);
			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.DEFAULT) {
				{
				this.state = 779;
				this.defaultValue();
				}
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
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.variableDeclarators();
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
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.match(JavaParser.DEFAULT);
			this.state = 785;
			this.elementValue();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.match(JavaParser.LBRACE);
			this.state = 791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				{
				this.state = 788;
				this.blockStatement();
				}
				}
				this.state = 793;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 794;
			this.match(JavaParser.RBRACE);
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
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, JavaParser.RULE_blockStatement);
		try {
			this.state = 801;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 796;
				this.localVariableDeclaration();
				this.state = 797;
				this.match(JavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 799;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 800;
				this.localTypeDeclaration();
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
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JavaParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,92,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 803;
					this.variableModifier();
					}
					} 
				}
				this.state = 808;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,92,this._ctx);
			}
			this.state = 809;
			this.typeType();
			this.state = 810;
			this.variableDeclarators();
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
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		let _localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JavaParser.RULE_localTypeDeclaration);
		let _la: number;
		try {
			this.state = 823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.ABSTRACT:
			case JavaParser.CLASS:
			case JavaParser.FINAL:
			case JavaParser.INTERFACE:
			case JavaParser.PRIVATE:
			case JavaParser.PROTECTED:
			case JavaParser.PUBLIC:
			case JavaParser.STATIC:
			case JavaParser.STRICTFP:
			case JavaParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JavaParser.ABSTRACT || _la===JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la===JavaParser.AT) {
					{
					{
					this.state = 812;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 817;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 820;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CLASS:
					{
					this.state = 818;
					this.classDeclaration();
					}
					break;
				case JavaParser.INTERFACE:
					{
					this.state = 819;
					this.interfaceDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case JavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 822;
				this.match(JavaParser.SEMI);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JavaParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 929;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,108,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 825;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 826;
				this.match(JavaParser.ASSERT);
				this.state = 827;
				this.expression(0);
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.COLON) {
					{
					this.state = 828;
					this.match(JavaParser.COLON);
					this.state = 829;
					this.expression(0);
					}
				}

				this.state = 832;
				this.match(JavaParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 834;
				this.match(JavaParser.IF);
				this.state = 835;
				this.parExpression();
				this.state = 836;
				this.statement();
				this.state = 839;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,97,this._ctx) ) {
				case 1:
					{
					this.state = 837;
					this.match(JavaParser.ELSE);
					this.state = 838;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 841;
				this.match(JavaParser.FOR);
				this.state = 842;
				this.match(JavaParser.LPAREN);
				this.state = 843;
				this.forControl();
				this.state = 844;
				this.match(JavaParser.RPAREN);
				this.state = 845;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 847;
				this.match(JavaParser.WHILE);
				this.state = 848;
				this.parExpression();
				this.state = 849;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 851;
				this.match(JavaParser.DO);
				this.state = 852;
				this.statement();
				this.state = 853;
				this.match(JavaParser.WHILE);
				this.state = 854;
				this.parExpression();
				this.state = 855;
				this.match(JavaParser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 857;
				this.match(JavaParser.TRY);
				this.state = 858;
				this.block();
				this.state = 868;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.CATCH:
					{
					this.state = 860; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 859;
						this.catchClause();
						}
						}
						this.state = 862; 
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ( _la===JavaParser.CATCH );
					this.state = 865;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===JavaParser.FINALLY) {
						{
						this.state = 864;
						this.finallyBlock();
						}
					}

					}
					break;
				case JavaParser.FINALLY:
					{
					this.state = 867;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 870;
				this.match(JavaParser.TRY);
				this.state = 871;
				this.resourceSpecification();
				this.state = 872;
				this.block();
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JavaParser.CATCH) {
					{
					{
					this.state = 873;
					this.catchClause();
					}
					}
					this.state = 878;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.FINALLY) {
					{
					this.state = 879;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 882;
				this.match(JavaParser.SWITCH);
				this.state = 883;
				this.parExpression();
				this.state = 884;
				this.match(JavaParser.LBRACE);
				this.state = 888;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,103,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 885;
						this.switchBlockStatementGroup();
						}
						} 
					}
					this.state = 890;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,103,this._ctx);
				}
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JavaParser.CASE || _la===JavaParser.DEFAULT) {
					{
					{
					this.state = 891;
					this.switchLabel();
					}
					}
					this.state = 896;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 897;
				this.match(JavaParser.RBRACE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 899;
				this.match(JavaParser.SYNCHRONIZED);
				this.state = 900;
				this.parExpression();
				this.state = 901;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 903;
				this.match(JavaParser.RETURN);
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
					{
					this.state = 904;
					this.expression(0);
					}
				}

				this.state = 907;
				this.match(JavaParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 908;
				this.match(JavaParser.THROW);
				this.state = 909;
				this.expression(0);
				this.state = 910;
				this.match(JavaParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 912;
				this.match(JavaParser.BREAK);
				this.state = 914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.IDENTIFIER) {
					{
					this.state = 913;
					this.match(JavaParser.IDENTIFIER);
					}
				}

				this.state = 916;
				this.match(JavaParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 917;
				this.match(JavaParser.CONTINUE);
				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.IDENTIFIER) {
					{
					this.state = 918;
					this.match(JavaParser.IDENTIFIER);
					}
				}

				this.state = 921;
				this.match(JavaParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 922;
				this.match(JavaParser.SEMI);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 923;
				_localctx._statementExpression = this.expression(0);
				this.state = 924;
				this.match(JavaParser.SEMI);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 926;
				_localctx._identifierLabel = this.match(JavaParser.IDENTIFIER);
				this.state = 927;
				this.match(JavaParser.COLON);
				this.state = 928;
				this.statement();
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
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JavaParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			this.match(JavaParser.CATCH);
			this.state = 932;
			this.match(JavaParser.LPAREN);
			this.state = 936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.FINAL || _la===JavaParser.AT) {
				{
				{
				this.state = 933;
				this.variableModifier();
				}
				}
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 939;
			this.catchType();
			this.state = 940;
			this.match(JavaParser.IDENTIFIER);
			this.state = 941;
			this.match(JavaParser.RPAREN);
			this.state = 942;
			this.block();
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
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JavaParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this.qualifiedName();
			this.state = 949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.BITOR) {
				{
				{
				this.state = 945;
				this.match(JavaParser.BITOR);
				this.state = 946;
				this.qualifiedName();
				}
				}
				this.state = 951;
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
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JavaParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.match(JavaParser.FINALLY);
			this.state = 953;
			this.block();
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
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JavaParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			this.match(JavaParser.LPAREN);
			this.state = 956;
			this.resources();
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.SEMI) {
				{
				this.state = 957;
				this.match(JavaParser.SEMI);
				}
			}

			this.state = 960;
			this.match(JavaParser.RPAREN);
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
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JavaParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
			this.resource();
			this.state = 967;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,112,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 963;
					this.match(JavaParser.SEMI);
					this.state = 964;
					this.resource();
					}
					} 
				}
				this.state = 969;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,112,this._ctx);
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
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, JavaParser.RULE_resource);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.FINAL || _la===JavaParser.AT) {
				{
				{
				this.state = 970;
				this.variableModifier();
				}
				}
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 976;
			this.classOrInterfaceType();
			this.state = 977;
			this.variableDeclaratorId();
			this.state = 978;
			this.match(JavaParser.ASSIGN);
			this.state = 979;
			this.expression(0);
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
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, JavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 981;
				this.switchLabel();
				}
				}
				this.state = 984; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===JavaParser.CASE || _la===JavaParser.DEFAULT );
			this.state = 987; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 986;
				this.blockStatement();
				}
				}
				this.state = 989; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.DECIMAL_LITERAL - 33)) | (1 << (JavaParser.HEX_LITERAL - 33)) | (1 << (JavaParser.OCT_LITERAL - 33)) | (1 << (JavaParser.BINARY_LITERAL - 33)) | (1 << (JavaParser.FLOAT_LITERAL - 33)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) | (1 << (JavaParser.BOOL_LITERAL - 33)) | (1 << (JavaParser.CHAR_LITERAL - 33)) | (1 << (JavaParser.STRING_LITERAL - 33)) | (1 << (JavaParser.NULL_LITERAL - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.SEMI - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.BANG - 67)) | (1 << (JavaParser.TILDE - 67)) | (1 << (JavaParser.INC - 67)) | (1 << (JavaParser.DEC - 67)) | (1 << (JavaParser.ADD - 67)) | (1 << (JavaParser.SUB - 67)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER );
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
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, JavaParser.RULE_switchLabel);
		try {
			this.state = 999;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 991;
				this.match(JavaParser.CASE);
				this.state = 994;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,116,this._ctx) ) {
				case 1:
					{
					this.state = 992;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 993;
					_localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
					}
					break;
				}
				this.state = 996;
				this.match(JavaParser.COLON);
				}
				break;
			case JavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 997;
				this.match(JavaParser.DEFAULT);
				this.state = 998;
				this.match(JavaParser.COLON);
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
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, JavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1013;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1001;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
					{
					this.state = 1002;
					this.forInit();
					}
				}

				this.state = 1005;
				this.match(JavaParser.SEMI);
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
					{
					this.state = 1006;
					this.expression(0);
					}
				}

				this.state = 1009;
				this.match(JavaParser.SEMI);
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
					{
					this.state = 1010;
					_localctx._forUpdate = this.expressionList();
					}
				}

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
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, JavaParser.RULE_forInit);
		try {
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,122,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1015;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1016;
				this.expressionList();
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
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, JavaParser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,123,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1019;
					this.variableModifier();
					}
					} 
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,123,this._ctx);
			}
			this.state = 1025;
			this.typeType();
			this.state = 1026;
			this.variableDeclaratorId();
			this.state = 1027;
			this.match(JavaParser.COLON);
			this.state = 1028;
			this.expression(0);
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
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, JavaParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.match(JavaParser.LPAREN);
			this.state = 1031;
			this.expression(0);
			this.state = 1032;
			this.match(JavaParser.RPAREN);
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, JavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1034;
			this.expression(0);
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 1035;
				this.match(JavaParser.COMMA);
				this.state = 1036;
				this.expression(0);
				}
				}
				this.state = 1041;
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 162;
		this.enterRecursionRule(_localctx, 162, JavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,128,this._ctx) ) {
			case 1:
				{
				this.state = 1043;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1044;
				this.match(JavaParser.NEW);
				this.state = 1045;
				this.creator();
				}
				break;

			case 3:
				{
				this.state = 1046;
				this.match(JavaParser.LPAREN);
				this.state = 1047;
				this.typeType();
				this.state = 1048;
				this.match(JavaParser.RPAREN);
				this.state = 1049;
				this.expression(21);
				}
				break;

			case 4:
				{
				this.state = 1051;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (JavaParser.INC - 83)) | (1 << (JavaParser.DEC - 83)) | (1 << (JavaParser.ADD - 83)) | (1 << (JavaParser.SUB - 83)))) !== 0)) ) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1052;
				this.expression(19);
				}
				break;

			case 5:
				{
				this.state = 1053;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===JavaParser.BANG || _la===JavaParser.TILDE) ) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1054;
				this.expression(18);
				}
				break;

			case 6:
				{
				this.state = 1055;
				this.lambdaExpression();
				}
				break;

			case 7:
				{
				this.state = 1056;
				this.typeType();
				this.state = 1057;
				this.match(JavaParser.COLONCOLON);
				this.state = 1063;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.LT:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1059;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===JavaParser.LT) {
						{
						this.state = 1058;
						this.typeArguments();
						}
					}

					this.state = 1061;
					this.match(JavaParser.IDENTIFIER);
					}
					break;
				case JavaParser.NEW:
					{
					this.state = 1062;
					this.match(JavaParser.NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				{
				this.state = 1065;
				this.classType();
				this.state = 1066;
				this.match(JavaParser.COLONCOLON);
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.LT) {
					{
					this.state = 1067;
					this.typeArguments();
					}
				}

				this.state = 1070;
				this.match(JavaParser.NEW);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1159;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1157;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,134,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1074;
						if (!(this.precpred(this._ctx, 17))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						this.state = 1075;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (JavaParser.MUL - 87)) | (1 << (JavaParser.DIV - 87)) | (1 << (JavaParser.MOD - 87)))) !== 0)) ) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1076;
						this.expression(18);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1077;
						if (!(this.precpred(this._ctx, 16))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						this.state = 1078;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===JavaParser.ADD || _la===JavaParser.SUB) ) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1079;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1080;
						if (!(this.precpred(this._ctx, 15))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						this.state = 1088;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,129,this._ctx) ) {
						case 1:
							{
							this.state = 1081;
							this.match(JavaParser.LT);
							this.state = 1082;
							this.match(JavaParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1083;
							this.match(JavaParser.GT);
							this.state = 1084;
							this.match(JavaParser.GT);
							this.state = 1085;
							this.match(JavaParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1086;
							this.match(JavaParser.GT);
							this.state = 1087;
							this.match(JavaParser.GT);
							}
							break;
						}
						this.state = 1090;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1091;
						if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						this.state = 1092;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (JavaParser.GT - 71)) | (1 << (JavaParser.LT - 71)) | (1 << (JavaParser.LE - 71)) | (1 << (JavaParser.GE - 71)))) !== 0)) ) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1093;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1094;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 1095;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===JavaParser.EQUAL || _la===JavaParser.NOTEQUAL) ) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1096;
						this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1097;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 1098;
						_localctx._bop = this.match(JavaParser.BITAND);
						this.state = 1099;
						this.expression(12);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1100;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 1101;
						_localctx._bop = this.match(JavaParser.CARET);
						this.state = 1102;
						this.expression(11);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1103;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 1104;
						_localctx._bop = this.match(JavaParser.BITOR);
						this.state = 1105;
						this.expression(10);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1106;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 1107;
						_localctx._bop = this.match(JavaParser.AND);
						this.state = 1108;
						this.expression(9);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1109;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 1110;
						_localctx._bop = this.match(JavaParser.OR);
						this.state = 1111;
						this.expression(8);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1112;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 1113;
						_localctx._bop = this.match(JavaParser.QUESTION);
						this.state = 1114;
						this.expression(0);
						this.state = 1115;
						this.match(JavaParser.COLON);
						this.state = 1116;
						this.expression(7);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1118;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 1119;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JavaParser.ASSIGN - 70)) | (1 << (JavaParser.ADD_ASSIGN - 70)) | (1 << (JavaParser.SUB_ASSIGN - 70)) | (1 << (JavaParser.MUL_ASSIGN - 70)) | (1 << (JavaParser.DIV_ASSIGN - 70)) | (1 << (JavaParser.AND_ASSIGN - 70)) | (1 << (JavaParser.OR_ASSIGN - 70)) | (1 << (JavaParser.XOR_ASSIGN - 70)) | (1 << (JavaParser.MOD_ASSIGN - 70)) | (1 << (JavaParser.LSHIFT_ASSIGN - 70)))) !== 0) || _la===JavaParser.RSHIFT_ASSIGN || _la===JavaParser.URSHIFT_ASSIGN) ) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1120;
						this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1121;
						if (!(this.precpred(this._ctx, 25))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						this.state = 1122;
						_localctx._bop = this.match(JavaParser.DOT);
						this.state = 1133;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case JavaParser.IDENTIFIER:
							{
							this.state = 1123;
							this.match(JavaParser.IDENTIFIER);
							}
							break;
						case JavaParser.THIS:
							{
							this.state = 1124;
							this.match(JavaParser.THIS);
							}
							break;
						case JavaParser.NEW:
							{
							this.state = 1125;
							this.match(JavaParser.NEW);
							this.state = 1127;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===JavaParser.LT) {
								{
								this.state = 1126;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1129;
							this.innerCreator();
							}
							break;
						case JavaParser.SUPER:
							{
							this.state = 1130;
							this.match(JavaParser.SUPER);
							this.state = 1131;
							this.superSuffix();
							}
							break;
						case JavaParser.LT:
							{
							this.state = 1132;
							this.explicitGenericInvocation();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1135;
						if (!(this.precpred(this._ctx, 24))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						this.state = 1136;
						this.match(JavaParser.LBRACK);
						this.state = 1137;
						this.expression(0);
						this.state = 1138;
						this.match(JavaParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1140;
						if (!(this.precpred(this._ctx, 23))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						this.state = 1141;
						this.match(JavaParser.LPAREN);
						this.state = 1143;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
							{
							this.state = 1142;
							this.expressionList();
							}
						}

						this.state = 1145;
						this.match(JavaParser.RPAREN);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1146;
						if (!(this.precpred(this._ctx, 20))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						this.state = 1147;
						_localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===JavaParser.INC || _la===JavaParser.DEC) ) {
							_localctx._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1148;
						if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						this.state = 1149;
						_localctx._bop = this.match(JavaParser.INSTANCEOF);
						this.state = 1150;
						this.typeType();
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1151;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 1152;
						this.match(JavaParser.COLONCOLON);
						this.state = 1154;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===JavaParser.LT) {
							{
							this.state = 1153;
							this.typeArguments();
							}
						}

						this.state = 1156;
						this.match(JavaParser.IDENTIFIER);
						}
						break;
					}
					} 
				}
				this.state = 1161;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, JavaParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1162;
			this.lambdaParameters();
			this.state = 1163;
			this.match(JavaParser.ARROW);
			this.state = 1164;
			this.lambdaBody();
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
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, JavaParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1166;
				this.match(JavaParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1167;
				this.match(JavaParser.LPAREN);
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la===JavaParser.SHORT || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
					{
					this.state = 1168;
					this.formalParameterList();
					}
				}

				this.state = 1171;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1172;
				this.match(JavaParser.LPAREN);
				this.state = 1173;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JavaParser.COMMA) {
					{
					{
					this.state = 1174;
					this.match(JavaParser.COMMA);
					this.state = 1175;
					this.match(JavaParser.IDENTIFIER);
					}
					}
					this.state = 1180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1181;
				this.match(JavaParser.RPAREN);
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
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, JavaParser.RULE_lambdaBody);
		try {
			this.state = 1186;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.NEW:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.THIS:
			case JavaParser.VOID:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1184;
				this.expression(0);
				}
				break;
			case JavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1185;
				this.block();
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
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, JavaParser.RULE_primary);
		try {
			this.state = 1206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,141,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1188;
				this.match(JavaParser.LPAREN);
				this.state = 1189;
				this.expression(0);
				this.state = 1190;
				this.match(JavaParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1192;
				this.match(JavaParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1193;
				this.match(JavaParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1194;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1195;
				this.match(JavaParser.IDENTIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1196;
				this.typeTypeOrVoid();
				this.state = 1197;
				this.match(JavaParser.DOT);
				this.state = 1198;
				this.match(JavaParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1200;
				this.nonWildcardTypeArguments();
				this.state = 1204;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.SUPER:
				case JavaParser.IDENTIFIER:
					{
					this.state = 1201;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case JavaParser.THIS:
					{
					this.state = 1202;
					this.match(JavaParser.THIS);
					this.state = 1203;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, JavaParser.RULE_classType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,142,this._ctx) ) {
			case 1:
				{
				this.state = 1208;
				this.classOrInterfaceType();
				this.state = 1209;
				this.match(JavaParser.DOT);
				}
				break;
			}
			this.state = 1216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.AT) {
				{
				{
				this.state = 1213;
				this.annotation();
				}
				}
				this.state = 1218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1219;
			this.match(JavaParser.IDENTIFIER);
			this.state = 1221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.LT) {
				{
				this.state = 1220;
				this.typeArguments();
				}
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
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, JavaParser.RULE_creator);
		try {
			this.state = 1232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1223;
				this.nonWildcardTypeArguments();
				this.state = 1224;
				this.createdName();
				this.state = 1225;
				this.classCreatorRest();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1227;
				this.createdName();
				this.state = 1230;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.LBRACK:
					{
					this.state = 1228;
					this.arrayCreatorRest();
					}
					break;
				case JavaParser.LPAREN:
					{
					this.state = 1229;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, JavaParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1234;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===JavaParser.LT) {
					{
					this.state = 1235;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JavaParser.DOT) {
					{
					{
					this.state = 1238;
					this.match(JavaParser.DOT);
					this.state = 1239;
					this.match(JavaParser.IDENTIFIER);
					this.state = 1241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===JavaParser.LT) {
						{
						this.state = 1240;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1247;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1248;
				this.primitiveType();
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
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, JavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1251;
			this.match(JavaParser.IDENTIFIER);
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.LT) {
				{
				this.state = 1252;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1255;
			this.classCreatorRest();
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
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, JavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this.match(JavaParser.LBRACK);
			this.state = 1285;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.RBRACK:
				{
				this.state = 1258;
				this.match(JavaParser.RBRACK);
				this.state = 1263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===JavaParser.LBRACK) {
					{
					{
					this.state = 1259;
					this.match(JavaParser.LBRACK);
					this.state = 1260;
					this.match(JavaParser.RBRACK);
					}
					}
					this.state = 1265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1266;
				this.arrayInitializer();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.NEW:
			case JavaParser.SHORT:
			case JavaParser.SUPER:
			case JavaParser.THIS:
			case JavaParser.VOID:
			case JavaParser.DECIMAL_LITERAL:
			case JavaParser.HEX_LITERAL:
			case JavaParser.OCT_LITERAL:
			case JavaParser.BINARY_LITERAL:
			case JavaParser.FLOAT_LITERAL:
			case JavaParser.HEX_FLOAT_LITERAL:
			case JavaParser.BOOL_LITERAL:
			case JavaParser.CHAR_LITERAL:
			case JavaParser.STRING_LITERAL:
			case JavaParser.NULL_LITERAL:
			case JavaParser.LPAREN:
			case JavaParser.LT:
			case JavaParser.BANG:
			case JavaParser.TILDE:
			case JavaParser.INC:
			case JavaParser.DEC:
			case JavaParser.ADD:
			case JavaParser.SUB:
			case JavaParser.AT:
			case JavaParser.IDENTIFIER:
				{
				this.state = 1267;
				this.expression(0);
				this.state = 1268;
				this.match(JavaParser.RBRACK);
				this.state = 1275;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,153,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1269;
						this.match(JavaParser.LBRACK);
						this.state = 1270;
						this.expression(0);
						this.state = 1271;
						this.match(JavaParser.RBRACK);
						}
						} 
					}
					this.state = 1277;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,153,this._ctx);
				}
				this.state = 1282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,154,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1278;
						this.match(JavaParser.LBRACK);
						this.state = 1279;
						this.match(JavaParser.RBRACK);
						}
						} 
					}
					this.state = 1284;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,154,this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, JavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this.arguments();
			this.state = 1289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,156,this._ctx) ) {
			case 1:
				{
				this.state = 1288;
				this.classBody();
				}
				break;
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
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, JavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1291;
			this.nonWildcardTypeArguments();
			this.state = 1292;
			this.explicitGenericInvocationSuffix();
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
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, JavaParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1294;
				this.match(JavaParser.LT);
				this.state = 1295;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1296;
				this.typeArguments();
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
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,158,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1299;
				this.match(JavaParser.LT);
				this.state = 1300;
				this.match(JavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1301;
				this.nonWildcardTypeArguments();
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
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, JavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this.match(JavaParser.LT);
			this.state = 1305;
			this.typeList();
			this.state = 1306;
			this.match(JavaParser.GT);
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, JavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1308;
			this.typeType();
			this.state = 1313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 1309;
				this.match(JavaParser.COMMA);
				this.state = 1310;
				this.typeType();
				}
				}
				this.state = 1315;
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
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, JavaParser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===JavaParser.AT) {
				{
				this.state = 1316;
				this.annotation();
				}
			}

			this.state = 1321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.IDENTIFIER:
				{
				this.state = 1319;
				this.classOrInterfaceType();
				}
				break;
			case JavaParser.BOOLEAN:
			case JavaParser.BYTE:
			case JavaParser.CHAR:
			case JavaParser.DOUBLE:
			case JavaParser.FLOAT:
			case JavaParser.INT:
			case JavaParser.LONG:
			case JavaParser.SHORT:
				{
				this.state = 1320;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,162,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1323;
					this.match(JavaParser.LBRACK);
					this.state = 1324;
					this.match(JavaParser.RBRACK);
					}
					} 
				}
				this.state = 1329;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,162,this._ctx);
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, JavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1330;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la===JavaParser.SHORT) ) {
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
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, JavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this.match(JavaParser.LT);
			this.state = 1333;
			this.typeArgument();
			this.state = 1338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JavaParser.COMMA) {
				{
				{
				this.state = 1334;
				this.match(JavaParser.COMMA);
				this.state = 1335;
				this.typeArgument();
				}
				}
				this.state = 1340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1341;
			this.match(JavaParser.GT);
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
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, JavaParser.RULE_superSuffix);
		try {
			this.state = 1349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1343;
				this.arguments();
				}
				break;
			case JavaParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1344;
				this.match(JavaParser.DOT);
				this.state = 1345;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1347;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,164,this._ctx) ) {
				case 1:
					{
					this.state = 1346;
					this.arguments();
					}
					break;
				}
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
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, JavaParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1351;
				this.match(JavaParser.SUPER);
				this.state = 1352;
				this.superSuffix();
				}
				break;
			case JavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1353;
				this.match(JavaParser.IDENTIFIER);
				this.state = 1354;
				this.arguments();
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, JavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			this.match(JavaParser.LPAREN);
			this.state = 1359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)) | (1 << (JavaParser.OCT_LITERAL - 37)) | (1 << (JavaParser.BINARY_LITERAL - 37)) | (1 << (JavaParser.FLOAT_LITERAL - 37)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) | (1 << (JavaParser.BOOL_LITERAL - 37)) | (1 << (JavaParser.CHAR_LITERAL - 37)) | (1 << (JavaParser.STRING_LITERAL - 37)) | (1 << (JavaParser.NULL_LITERAL - 37)) | (1 << (JavaParser.LPAREN - 37)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (JavaParser.LT - 72)) | (1 << (JavaParser.BANG - 72)) | (1 << (JavaParser.TILDE - 72)) | (1 << (JavaParser.INC - 72)) | (1 << (JavaParser.DEC - 72)) | (1 << (JavaParser.ADD - 72)) | (1 << (JavaParser.SUB - 72)))) !== 0) || _la===JavaParser.AT || _la===JavaParser.IDENTIFIER) {
				{
				this.state = 1358;
				this.expressionList();
				}
			}

			this.state = 1361;
			this.match(JavaParser.RPAREN);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 81:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

		case 1:
			return this.precpred(this._ctx, 16);

		case 2:
			return this.precpred(this._ctx, 15);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);

		case 9:
			return this.precpred(this._ctx, 7);

		case 10:
			return this.precpred(this._ctx, 6);

		case 11:
			return this.precpred(this._ctx, 5);

		case 12:
			return this.precpred(this._ctx, 25);

		case 13:
			return this.precpred(this._ctx, 24);

		case 14:
			return this.precpred(this._ctx, 23);

		case 15:
			return this.precpred(this._ctx, 20);

		case 16:
			return this.precpred(this._ctx, 13);

		case 17:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03q\u0556\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x03"+
		"\x02\x05\x02\xD2\n\x02\x03\x02\x07\x02\xD5\n\x02\f\x02\x0E\x02\xD8\v\x02"+
		"\x03\x02\x07\x02\xDB\n\x02\f\x02\x0E\x02\xDE\v\x02\x03\x02\x03\x02\x03"+
		"\x03\x07\x03\xE3\n\x03\f\x03\x0E\x03\xE6\v\x03\x03\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x04\x03\x04\x05\x04\xEE\n\x04\x03\x04\x03\x04\x03\x04\x05"+
		"\x04\xF3\n\x04\x03\x04\x03\x04\x03\x05\x07\x05\xF8\n\x05\f\x05\x0E\x05"+
		"\xFB\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0101\n\x05\x03\x05"+
		"\x05\x05\u0104\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u010B"+
		"\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x05\x07\u0115\n\x07\x03\b\x03\b\x05\b\u0119\n\b\x03\t\x03\t\x03\t\x05"+
		"\t\u011E\n\t\x03\t\x03\t\x05\t\u0122\n\t\x03\t\x03\t\x05\t\u0126\n\t\x03"+
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\u012E\n\n\f\n\x0E\n\u0131\v\n\x03"+
		"\n\x03\n\x03\v\x07\v\u0136\n\v\f\v\x0E\v\u0139\v\v\x03\v\x03\v\x03\v\x05"+
		"\v\u013E\n\v\x03\f\x03\f\x03\f\x07\f\u0143\n\f\f\f\x0E\f\u0146\v\f\x03"+
		"\r\x03\r\x03\r\x03\r\x05\r\u014C\n\r\x03\r\x03\r\x05\r\u0150\n\r\x03\r"+
		"\x05\r\u0153\n\r\x03\r\x05\r\u0156\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03"+
		"\x0E\x07\x0E\u015D\n\x0E\f\x0E\x0E\x0E\u0160\v\x0E\x03\x0F\x07\x0F\u0163"+
		"\n\x0F\f\x0F\x0E\x0F\u0166\v\x0F\x03\x0F\x03\x0F\x05\x0F\u016A\n\x0F\x03"+
		"\x0F\x05\x0F\u016D\n\x0F\x03\x10\x03\x10\x07\x10\u0171\n\x10\f\x10\x0E"+
		"\x10\u0174\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0179\n\x11\x03\x11\x03"+
		"\x11\x05\x11\u017D\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x07\x12\u0183"+
		"\n\x12\f\x12\x0E\x12\u0186\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13"+
		"\u018C\n\x13\f\x13\x0E\x13\u018F\v\x13\x03\x13\x03\x13\x03\x14\x03\x14"+
		"\x05\x14\u0195\n\x14\x03\x14\x03\x14\x07\x14\u0199\n\x14\f\x14\x0E\x14"+
		"\u019C\v\x14\x03\x14\x05\x14\u019F\n\x14\x03\x15\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01AA\n\x15\x03\x16\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01B1\n\x16\f\x16\x0E\x16\u01B4\v"+
		"\x16\x03\x16\x03\x16\x05\x16\u01B8\n\x16\x03\x16\x03\x16\x03\x17\x03\x17"+
		"\x05\x17\u01BE\n\x17\x03\x18\x03\x18\x05\x18\u01C2\n\x18\x03\x19\x03\x19"+
		"\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B"+
		"\u01CE\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x07"+
		"\x1D\u01D7\n\x1D\f\x1D\x0E\x1D\u01DA\v\x1D\x03\x1D\x03\x1D\x05\x1D\u01DE"+
		"\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E"+
		"\u01E7\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01ED\n\x1F\f\x1F"+
		"\x0E\x1F\u01F0\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u01F7\n \f \x0E"+
		" \u01FA\v \x03 \x03 \x03 \x03!\x07!\u0200\n!\f!\x0E!\u0203\v!\x03!\x03"+
		"!\x03!\x07!\u0208\n!\f!\x0E!\u020B\v!\x03!\x03!\x05!\u020F\n!\x03!\x03"+
		"!\x03!\x03!\x07!\u0215\n!\f!\x0E!\u0218\v!\x03!\x03!\x05!\u021C\n!\x03"+
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0226\n\"\x03#\x03#\x03"+
		"#\x03$\x03$\x03$\x07$\u022E\n$\f$\x0E$\u0231\v$\x03%\x03%\x03%\x05%\u0236"+
		"\n%\x03&\x03&\x03&\x07&\u023B\n&\f&\x0E&\u023E\v&\x03\'\x03\'\x05\'\u0242"+
		"\n\'\x03(\x03(\x03(\x03(\x07(\u0248\n(\f(\x0E(\u024B\v(\x03(\x05(\u024E"+
		"\n(\x05(\u0250\n(\x03(\x03(\x03)\x03)\x05)\u0256\n)\x03)\x03)\x03)\x05"+
		")\u025B\n)\x07)\u025D\n)\f)\x0E)\u0260\v)\x03*\x03*\x03*\x03*\x05*\u0266"+
		"\n*\x05*\u0268\n*\x03+\x03+\x03+\x07+\u026D\n+\f+\x0E+\u0270\v+\x03,\x03"+
		",\x05,\u0274\n,\x03,\x03,\x03-\x03-\x03-\x07-\u027B\n-\f-\x0E-\u027E\v"+
		"-\x03-\x03-\x05-\u0282\n-\x03-\x05-\u0285\n-\x03.\x07.\u0288\n.\f.\x0E"+
		".\u028B\v.\x03.\x03.\x03.\x03/\x07/\u0291\n/\f/\x0E/\u0294\v/\x03/\x03"+
		"/\x03/\x03/\x030\x030\x030\x070\u029D\n0\f0\x0E0\u02A0\v0\x031\x031\x03"+
		"1\x031\x031\x031\x051\u02A8\n1\x032\x032\x033\x033\x034\x034\x034\x03"+
		"4\x034\x054\u02B3\n4\x034\x054\u02B6\n4\x035\x035\x035\x075\u02BB\n5\f"+
		"5\x0E5\u02BE\v5\x036\x036\x036\x036\x037\x037\x037\x057\u02C7\n7\x038"+
		"\x038\x038\x038\x078\u02CD\n8\f8\x0E8\u02D0\v8\x058\u02D2\n8\x038\x05"+
		"8\u02D5\n8\x038\x038\x039\x039\x039\x039\x039\x03:\x03:\x07:\u02E0\n:"+
		"\f:\x0E:\u02E3\v:\x03:\x03:\x03;\x07;\u02E8\n;\f;\x0E;\u02EB\v;\x03;\x03"+
		";\x05;\u02EF\n;\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02F7\n<\x03<\x03<"+
		"\x05<\u02FB\n<\x03<\x03<\x05<\u02FF\n<\x03<\x03<\x05<\u0303\n<\x05<\u0305"+
		"\n<\x03=\x03=\x05=\u0309\n=\x03>\x03>\x03>\x03>\x05>\u030F\n>\x03?\x03"+
		"?\x03@\x03@\x03@\x03A\x03A\x07A\u0318\nA\fA\x0EA\u031B\vA\x03A\x03A\x03"+
		"B\x03B\x03B\x03B\x03B\x05B\u0324\nB\x03C\x07C\u0327\nC\fC\x0EC\u032A\v"+
		"C\x03C\x03C\x03C\x03D\x07D\u0330\nD\fD\x0ED\u0333\vD\x03D\x03D\x05D\u0337"+
		"\nD\x03D\x05D\u033A\nD\x03E\x03E\x03E\x03E\x03E\x05E\u0341\nE\x03E\x03"+
		"E\x03E\x03E\x03E\x03E\x03E\x05E\u034A\nE\x03E\x03E\x03E\x03E\x03E\x03"+
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x06"+
		"E\u035F\nE\rE\x0EE\u0360\x03E\x05E\u0364\nE\x03E\x05E\u0367\nE\x03E\x03"+
		"E\x03E\x03E\x07E\u036D\nE\fE\x0EE\u0370\vE\x03E\x05E\u0373\nE\x03E\x03"+
		"E\x03E\x03E\x07E\u0379\nE\fE\x0EE\u037C\vE\x03E\x07E\u037F\nE\fE\x0EE"+
		"\u0382\vE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u038C\nE\x03E\x03"+
		"E\x03E\x03E\x03E\x03E\x03E\x05E\u0395\nE\x03E\x03E\x03E\x05E\u039A\nE"+
		"\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u03A4\nE\x03F\x03F\x03F"+
		"\x07F\u03A9\nF\fF\x0EF\u03AC\vF\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03"+
		"G\x07G\u03B6\nG\fG\x0EG\u03B9\vG\x03H\x03H\x03H\x03I\x03I\x03I\x05I\u03C1"+
		"\nI\x03I\x03I\x03J\x03J\x03J\x07J\u03C8\nJ\fJ\x0EJ\u03CB\vJ\x03K\x07K"+
		"\u03CE\nK\fK\x0EK\u03D1\vK\x03K\x03K\x03K\x03K\x03K\x03L\x06L\u03D9\n"+
		"L\rL\x0EL\u03DA\x03L\x06L\u03DE\nL\rL\x0EL\u03DF\x03M\x03M\x03M\x05M\u03E5"+
		"\nM\x03M\x03M\x03M\x05M\u03EA\nM\x03N\x03N\x05N\u03EE\nN\x03N\x03N\x05"+
		"N\u03F2\nN\x03N\x03N\x05N\u03F6\nN\x05N\u03F8\nN\x03O\x03O\x05O\u03FC"+
		"\nO\x03P\x07P\u03FF\nP\fP\x0EP\u0402\vP\x03P\x03P\x03P\x03P\x03P\x03Q"+
		"\x03Q\x03Q\x03Q\x03R\x03R\x03R\x07R\u0410\nR\fR\x0ER\u0413\vR\x03S\x03"+
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03"+
		"S\x03S\x05S\u0426\nS\x03S\x03S\x05S\u042A\nS\x03S\x03S\x03S\x05S\u042F"+
		"\nS\x03S\x03S\x05S\u0433\nS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03"+
		"S\x03S\x03S\x03S\x03S\x03S\x05S\u0443\nS\x03S\x03S\x03S\x03S\x03S\x03"+
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03"+
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03"+
		"S\x03S\x03S\x03S\x05S\u046A\nS\x03S\x03S\x03S\x03S\x05S\u0470\nS\x03S"+
		"\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u047A\nS\x03S\x03S\x03S\x03S"+
		"\x03S\x03S\x03S\x03S\x03S\x05S\u0485\nS\x03S\x07S\u0488\nS\fS\x0ES\u048B"+
		"\vS\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x05U\u0494\nU\x03U\x03U\x03U\x03"+
		"U\x03U\x07U\u049B\nU\fU\x0EU\u049E\vU\x03U\x05U\u04A1\nU\x03V\x03V\x05"+
		"V\u04A5\nV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03"+
		"W\x03W\x03W\x03W\x03W\x05W\u04B7\nW\x05W\u04B9\nW\x03X\x03X\x03X\x05X"+
		"\u04BE\nX\x03X\x07X\u04C1\nX\fX\x0EX\u04C4\vX\x03X\x03X\x05X\u04C8\nX"+
		"\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u04D1\nY\x05Y\u04D3\nY\x03Z\x03"+
		"Z\x05Z\u04D7\nZ\x03Z\x03Z\x03Z\x05Z\u04DC\nZ\x07Z\u04DE\nZ\fZ\x0EZ\u04E1"+
		"\vZ\x03Z\x05Z\u04E4\nZ\x03[\x03[\x05[\u04E8\n[\x03[\x03[\x03\\\x03\\\x03"+
		"\\\x03\\\x07\\\u04F0\n\\\f\\\x0E\\\u04F3\v\\\x03\\\x03\\\x03\\\x03\\\x03"+
		"\\\x03\\\x03\\\x07\\\u04FC\n\\\f\\\x0E\\\u04FF\v\\\x03\\\x03\\\x07\\\u0503"+
		"\n\\\f\\\x0E\\\u0506\v\\\x05\\\u0508\n\\\x03]\x03]\x05]\u050C\n]\x03^"+
		"\x03^\x03^\x03_\x03_\x03_\x05_\u0514\n_\x03`\x03`\x03`\x05`\u0519\n`\x03"+
		"a\x03a\x03a\x03a\x03b\x03b\x03b\x07b\u0522\nb\fb\x0Eb\u0525\vb\x03c\x05"+
		"c\u0528\nc\x03c\x03c\x05c\u052C\nc\x03c\x03c\x07c\u0530\nc\fc\x0Ec\u0533"+
		"\vc\x03d\x03d\x03e\x03e\x03e\x03e\x07e\u053B\ne\fe\x0Ee\u053E\ve\x03e"+
		"\x03e\x03f\x03f\x03f\x03f\x05f\u0546\nf\x05f\u0548\nf\x03g\x03g\x03g\x03"+
		"g\x05g\u054E\ng\x03h\x03h\x05h\u0552\nh\x03h\x03h\x03h\x02\x02\x03\xA4"+
		"i\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02"+
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02"+
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02"+
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02"+
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02"+
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02"+
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02"+
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\x02\x0E\x04\x02\x13\x13**\x03"+
		"\x0258\x03\x029:\x03\x02UX\x03\x02KL\x04\x02YZ^^\x03\x02WX\x04\x02IJP"+
		"Q\x04\x02OORR\x04\x02HH_i\x03\x02UV\n\x02\x05\x05\x07\x07\n\n\x10\x10"+
		"\x16\x16\x1D\x1D\x1F\x1F\'\'\u05EB\x02\xD1\x03\x02\x02\x02\x04\xE4\x03"+
		"\x02\x02\x02\x06\xEB\x03\x02\x02\x02\b\u0103\x03\x02\x02\x02\n\u010A\x03"+
		"\x02\x02\x02\f\u0114\x03\x02\x02\x02\x0E\u0118\x03\x02\x02\x02\x10\u011A"+
		"\x03\x02\x02\x02\x12\u0129\x03\x02\x02\x02\x14\u0137\x03\x02\x02\x02\x16"+
		"\u013F\x03\x02\x02\x02\x18\u0147\x03\x02\x02\x02\x1A\u0159\x03\x02\x02"+
		"\x02\x1C\u0164\x03\x02\x02\x02\x1E\u016E\x03\x02\x02\x02 \u0175\x03\x02"+
		"\x02\x02\"\u0180\x03\x02\x02\x02$\u0189\x03\x02\x02\x02&\u019E\x03\x02"+
		"\x02\x02(\u01A9\x03\x02\x02\x02*\u01AB\x03\x02\x02\x02,\u01BD\x03\x02"+
		"\x02\x02.\u01C1\x03\x02\x02\x020\u01C3\x03\x02\x02\x022\u01C6\x03\x02"+
		"\x02\x024\u01C9\x03\x02\x02\x026\u01D1\x03\x02\x02\x028\u01DD\x03\x02"+
		"\x02\x02:\u01E6\x03\x02\x02\x02<\u01E8\x03\x02\x02\x02>\u01F3\x03\x02"+
		"\x02\x02@\u0201\x03\x02\x02\x02B\u0225\x03\x02\x02\x02D\u0227\x03\x02"+
		"\x02\x02F\u022A\x03\x02\x02\x02H\u0232\x03\x02\x02\x02J\u0237\x03\x02"+
		"\x02\x02L\u0241\x03\x02\x02\x02N\u0243\x03\x02\x02\x02P\u0253\x03\x02"+
		"\x02\x02R\u0267\x03\x02\x02\x02T\u0269\x03\x02\x02\x02V\u0271\x03\x02"+
		"\x02\x02X\u0284\x03\x02\x02\x02Z\u0289\x03\x02\x02\x02\\\u0292\x03\x02"+
		"\x02\x02^\u0299\x03\x02\x02\x02`\u02A7\x03\x02\x02\x02b\u02A9\x03\x02"+
		"\x02\x02d\u02AB\x03\x02\x02\x02f\u02AD\x03\x02\x02\x02h\u02B7\x03\x02"+
		"\x02\x02j\u02BF\x03\x02\x02\x02l\u02C6\x03\x02\x02\x02n\u02C8\x03\x02"+
		"\x02\x02p\u02D8\x03\x02\x02\x02r\u02DD\x03\x02\x02\x02t\u02EE\x03\x02"+
		"\x02\x02v\u0304\x03\x02\x02\x02x\u0308\x03\x02\x02\x02z\u030A\x03\x02"+
		"\x02\x02|\u0310\x03\x02\x02\x02~\u0312\x03\x02\x02\x02\x80\u0315\x03\x02"+
		"\x02\x02\x82\u0323\x03\x02\x02\x02\x84\u0328\x03\x02\x02\x02\x86\u0339"+
		"\x03\x02\x02\x02\x88\u03A3\x03\x02\x02\x02\x8A\u03A5\x03\x02\x02\x02\x8C"+
		"\u03B2\x03\x02\x02\x02\x8E\u03BA\x03\x02\x02\x02\x90\u03BD\x03\x02\x02"+
		"\x02\x92\u03C4\x03\x02\x02\x02\x94\u03CF\x03\x02\x02\x02\x96\u03D8\x03"+
		"\x02\x02\x02\x98\u03E9\x03\x02\x02\x02\x9A\u03F7\x03\x02\x02\x02\x9C\u03FB"+
		"\x03\x02\x02\x02\x9E\u0400\x03\x02\x02\x02\xA0\u0408\x03\x02\x02\x02\xA2"+
		"\u040C\x03\x02\x02\x02\xA4\u0432\x03\x02\x02\x02\xA6\u048C\x03\x02\x02"+
		"\x02\xA8\u04A0\x03\x02\x02\x02\xAA\u04A4\x03\x02\x02\x02\xAC\u04B8\x03"+
		"\x02\x02\x02\xAE\u04BD\x03\x02\x02\x02\xB0\u04D2\x03\x02\x02\x02\xB2\u04E3"+
		"\x03\x02\x02\x02\xB4\u04E5\x03\x02\x02\x02\xB6\u04EB\x03\x02\x02\x02\xB8"+
		"\u0509\x03\x02\x02\x02\xBA\u050D\x03\x02\x02\x02\xBC\u0513\x03\x02\x02"+
		"\x02\xBE\u0518\x03\x02\x02\x02\xC0\u051A\x03\x02\x02\x02\xC2\u051E\x03"+
		"\x02\x02\x02\xC4\u0527\x03\x02\x02\x02\xC6\u0534\x03\x02\x02\x02\xC8\u0536"+
		"\x03\x02\x02\x02\xCA\u0547\x03\x02\x02\x02\xCC\u054D\x03\x02\x02\x02\xCE"+
		"\u054F\x03\x02\x02\x02\xD0\xD2\x05\x04\x03\x02\xD1\xD0\x03\x02\x02\x02"+
		"\xD1\xD2\x03\x02\x02\x02\xD2\xD6\x03\x02\x02\x02\xD3\xD5\x05\x06\x04\x02"+
		"\xD4\xD3\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02"+
		"\xD6\xD7\x03\x02\x02\x02\xD7\xDC\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02"+
		"\xD9\xDB\x05\b\x05\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02"+
		"\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02"+
		"\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x07\x02\x02\x03\xE0\x03\x03\x02\x02\x02"+
		"\xE1\xE3\x05f4\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4"+
		"\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE7\x03\x02\x02\x02\xE6"+
		"\xE4\x03\x02\x02\x02\xE7\xE8\x07\"\x02\x02\xE8\xE9\x05^0\x02\xE9\xEA\x07"+
		"E\x02\x02\xEA\x05\x03\x02\x02\x02\xEB\xED\x07\x1B\x02\x02\xEC\xEE\x07"+
		"(\x02\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03"+
		"\x02\x02\x02\xEF\xF2\x05^0\x02\xF0\xF1\x07G\x02\x02\xF1\xF3\x07Y\x02\x02"+
		"\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02"+
		"\xF4\xF5\x07E\x02\x02\xF5\x07\x03\x02\x02\x02\xF6\xF8\x05\f\x07\x02\xF7"+
		"\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9"+
		"\xFA\x03\x02\x02\x02\xFA\u0100\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02"+
		"\xFC\u0101\x05\x10\t\x02\xFD\u0101\x05\x18\r\x02\xFE\u0101\x05 \x11\x02"+
		"\xFF\u0101\x05p9\x02\u0100\xFC\x03\x02\x02\x02\u0100\xFD\x03\x02\x02\x02"+
		"\u0100\xFE\x03\x02\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\u0104\x03\x02"+
		"\x02\x02\u0102\u0104\x07E\x02\x02\u0103\xF9\x03\x02\x02\x02\u0103\u0102"+
		"\x03\x02\x02\x02\u0104\t\x03\x02\x02\x02\u0105\u010B\x05\f\x07\x02\u0106"+
		"\u010B\x07 \x02\x02\u0107\u010B\x07,\x02\x02\u0108\u010B\x070\x02\x02"+
		"\u0109\u010B\x073\x02\x02\u010A\u0105\x03\x02\x02\x02\u010A\u0106\x03"+
		"\x02\x02\x02\u010A\u0107\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A"+
		"\u0109\x03\x02\x02\x02\u010B\v\x03\x02\x02\x02\u010C\u0115\x05f4\x02\u010D"+
		"\u0115\x07%\x02\x02\u010E\u0115\x07$\x02\x02\u010F\u0115\x07#\x02\x02"+
		"\u0110\u0115\x07(\x02\x02\u0111\u0115\x07\x03\x02\x02\u0112\u0115\x07"+
		"\x14\x02\x02\u0113\u0115\x07)\x02\x02\u0114\u010C\x03\x02\x02\x02\u0114"+
		"\u010D\x03\x02\x02\x02\u0114\u010E\x03\x02\x02\x02\u0114\u010F\x03\x02"+
		"\x02\x02\u0114\u0110\x03\x02\x02\x02\u0114\u0111\x03\x02\x02\x02\u0114"+
		"\u0112\x03\x02\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\r\x03\x02\x02"+
		"\x02\u0116\u0119\x07\x14\x02\x02\u0117\u0119\x05f4\x02\u0118\u0116\x03"+
		"\x02\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\x0F\x03\x02\x02\x02\u011A"+
		"\u011B\x07\v\x02\x02\u011B\u011D\x07q\x02\x02\u011C\u011E\x05\x12\n\x02"+
		"\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0121\x03"+
		"\x02\x02\x02\u011F\u0120\x07\x13\x02\x02\u0120\u0122\x05\xC4c\x02\u0121"+
		"\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0125\x03\x02"+
		"\x02\x02\u0123\u0124\x07\x1A\x02\x02\u0124\u0126\x05\xC2b\x02\u0125\u0123"+
		"\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02"+
		"\u0127\u0128\x05\"\x12\x02\u0128\x11\x03\x02\x02\x02\u0129\u012A\x07J"+
		"\x02\x02\u012A\u012F\x05\x14\v\x02\u012B\u012C\x07F\x02\x02\u012C\u012E"+
		"\x05\x14\v\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02"+
		"\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03"+
		"\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0133\x07I\x02\x02\u0133"+
		"\x13\x03\x02\x02\x02\u0134\u0136\x05f4\x02\u0135\u0134\x03\x02\x02\x02"+
		"\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03"+
		"\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A"+
		"\u013D\x07q\x02\x02\u013B\u013C\x07\x13\x02\x02\u013C\u013E\x05\x16\f"+
		"\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\x15"+
		"\x03\x02\x02\x02\u013F\u0144\x05\xC4c\x02\u0140\u0141\x07[\x02\x02\u0141"+
		"\u0143\x05\xC4c\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0146\x03\x02\x02"+
		"\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\x17"+
		"\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u0148\x07\x12\x02\x02"+
		"\u0148\u014B\x07q\x02\x02\u0149\u014A\x07\x1A\x02\x02\u014A\u014C\x05"+
		"\xC2b\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C"+
		"\u014D\x03\x02\x02\x02\u014D\u014F\x07A\x02\x02\u014E\u0150\x05\x1A\x0E"+
		"\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0152"+
		"\x03\x02\x02\x02\u0151\u0153\x07F\x02\x02\u0152\u0151\x03\x02\x02\x02"+
		"\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154\u0156\x05"+
		"\x1E\x10\x02\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156"+
		"\u0157\x03\x02\x02\x02\u0157\u0158\x07B\x02\x02\u0158\x19\x03\x02\x02"+
		"\x02\u0159\u015E\x05\x1C\x0F\x02\u015A\u015B\x07F\x02\x02\u015B\u015D"+
		"\x05\x1C\x0F\x02\u015C\u015A\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02"+
		"\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\x1B\x03"+
		"\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0163\x05f4\x02\u0162\u0161"+
		"\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02"+
		"\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0164\x03"+
		"\x02\x02\x02\u0167\u0169\x07q\x02\x02\u0168\u016A\x05";
	private static readonly _serializedATNSegment1: string =
		"\xCEh\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A"+
		"\u016C\x03\x02\x02\x02\u016B\u016D\x05\"\x12\x02\u016C\u016B\x03\x02\x02"+
		"\x02\u016C\u016D\x03\x02\x02\x02\u016D\x1D\x03\x02\x02\x02\u016E\u0172"+
		"\x07E\x02\x02\u016F\u0171\x05&\x14\x02\u0170\u016F\x03\x02\x02\x02\u0171"+
		"\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02"+
		"\x02\x02\u0173\x1F\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0176"+
		"\x07\x1E\x02\x02\u0176\u0178\x07q\x02\x02\u0177\u0179\x05\x12\n\x02\u0178"+
		"\u0177\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017C\x03\x02"+
		"\x02\x02\u017A\u017B\x07\x13\x02\x02\u017B\u017D\x05\xC2b\x02\u017C\u017A"+
		"\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02"+
		"\u017E\u017F\x05$\x13\x02\u017F!\x03\x02\x02\x02\u0180\u0184\x07A\x02"+
		"\x02\u0181\u0183\x05&\x14\x02\u0182\u0181\x03\x02\x02\x02\u0183\u0186"+
		"\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02"+
		"\u0185\u0187\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187\u0188\x07"+
		"B\x02\x02\u0188#\x03\x02\x02\x02\u0189\u018D\x07A\x02\x02\u018A\u018C"+
		"\x058\x1D\x02\u018B\u018A\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02"+
		"\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x03"+
		"\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0191\x07B\x02\x02\u0191"+
		"%\x03\x02\x02\x02\u0192\u019F\x07E\x02\x02\u0193\u0195\x07(\x02\x02\u0194"+
		"\u0193\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02"+
		"\x02\x02\u0196\u019F\x05\x80A\x02\u0197\u0199\x05\n\x06\x02\u0198\u0197"+
		"\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02"+
		"\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C\u019A\x03"+
		"\x02\x02\x02\u019D\u019F\x05(\x15\x02\u019E\u0192\x03\x02\x02\x02\u019E"+
		"\u0194\x03\x02\x02\x02\u019E\u019A\x03\x02\x02\x02\u019F\'\x03\x02\x02"+
		"\x02\u01A0\u01AA\x05*\x16\x02\u01A1\u01AA\x050\x19\x02\u01A2\u01AA\x05"+
		"6\x1C\x02\u01A3\u01AA\x054\x1B\x02\u01A4\u01AA\x052\x1A\x02\u01A5\u01AA"+
		"\x05 \x11\x02\u01A6\u01AA\x05p9\x02\u01A7\u01AA\x05\x10\t\x02\u01A8\u01AA"+
		"\x05\x18\r\x02\u01A9\u01A0\x03\x02\x02\x02\u01A9\u01A1\x03\x02\x02\x02"+
		"\u01A9\u01A2\x03\x02\x02\x02\u01A9\u01A3\x03\x02\x02\x02\u01A9\u01A4\x03"+
		"\x02\x02\x02\u01A9\u01A5\x03\x02\x02\x02\u01A9\u01A6\x03\x02\x02\x02\u01A9"+
		"\u01A7\x03\x02\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA)\x03\x02\x02"+
		"\x02\u01AB\u01AC\x05.\x18\x02\u01AC\u01AD\x07q\x02\x02\u01AD\u01B2\x05"+
		"V,\x02\u01AE\u01AF\x07C\x02\x02\u01AF\u01B1\x07D\x02\x02\u01B0\u01AE\x03"+
		"\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2"+
		"\u01B3\x03\x02\x02\x02\u01B3\u01B7\x03\x02\x02\x02\u01B4\u01B2\x03\x02"+
		"\x02\x02\u01B5\u01B6\x07/\x02\x02\u01B6\u01B8\x05T+\x02\u01B7\u01B5\x03"+
		"\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9"+
		"\u01BA\x05,\x17\x02\u01BA+\x03\x02\x02\x02\u01BB\u01BE\x05\x80A\x02\u01BC"+
		"\u01BE\x07E\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02\x02"+
		"\x02\u01BE-\x03\x02\x02\x02\u01BF\u01C2\x05\xC4c\x02\u01C0\u01C2\x072"+
		"\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2"+
		"/\x03\x02\x02\x02\u01C3\u01C4\x05\x12\n\x02\u01C4\u01C5\x05*\x16\x02\u01C5"+
		"1\x03\x02\x02\x02\u01C6\u01C7\x05\x12\n\x02\u01C7\u01C8\x054\x1B\x02\u01C8"+
		"3\x03\x02\x02\x02\u01C9\u01CA\x07q\x02\x02\u01CA\u01CD\x05V,\x02\u01CB"+
		"\u01CC\x07/\x02\x02\u01CC\u01CE\x05T+\x02\u01CD\u01CB\x03\x02\x02\x02"+
		"\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x05"+
		"\x80A\x02\u01D05\x03\x02\x02\x02\u01D1\u01D2\x05\xC4c\x02\u01D2\u01D3"+
		"\x05F$\x02\u01D3\u01D4\x07E\x02\x02\u01D47\x03\x02\x02\x02\u01D5\u01D7"+
		"\x05\n\x06\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02"+
		"\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DB\x03"+
		"\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE\x05:\x1E\x02\u01DC"+
		"\u01DE\x07E\x02\x02\u01DD\u01D8\x03\x02\x02\x02\u01DD\u01DC\x03\x02\x02"+
		"\x02\u01DE9\x03\x02\x02\x02\u01DF\u01E7\x05<\x1F\x02\u01E0\u01E7\x05@"+
		"!\x02\u01E1\u01E7\x05D#\x02\u01E2\u01E7\x05 \x11\x02\u01E3\u01E7\x05p"+
		"9\x02\u01E4\u01E7\x05\x10\t\x02\u01E5\u01E7\x05\x18\r\x02\u01E6\u01DF"+
		"\x03\x02\x02\x02\u01E6\u01E0\x03\x02\x02\x02\u01E6\u01E1\x03\x02\x02\x02"+
		"\u01E6\u01E2\x03\x02\x02\x02\u01E6\u01E3\x03\x02\x02\x02\u01E6\u01E4\x03"+
		"\x02\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7;\x03\x02\x02\x02\u01E8"+
		"\u01E9\x05\xC4c\x02\u01E9\u01EE\x05> \x02\u01EA\u01EB\x07F\x02\x02\u01EB"+
		"\u01ED\x05> \x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01F0\x03\x02\x02\x02"+
		"\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F1\x03"+
		"\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F2\x07E\x02\x02\u01F2"+
		"=\x03\x02\x02\x02\u01F3\u01F8\x07q\x02\x02\u01F4\u01F5\x07C\x02\x02\u01F5"+
		"\u01F7\x07D\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02"+
		"\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FB"+
		"\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FC\x07H\x02\x02"+
		"\u01FC\u01FD\x05L\'\x02\u01FD?\x03\x02\x02\x02\u01FE\u0200\x05B\"\x02"+
		"\u01FF\u01FE\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03"+
		"\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u020E\x03\x02\x02\x02\u0203"+
		"\u0201\x03\x02\x02\x02\u0204\u020F\x05.\x18\x02\u0205\u0209\x05\x12\n"+
		"\x02\u0206\u0208\x05f4\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B\x03"+
		"\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A"+
		"\u020C\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020D\x05.\x18"+
		"\x02\u020D\u020F\x03\x02\x02\x02\u020E\u0204\x03\x02\x02\x02\u020E\u0205"+
		"\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x07q\x02\x02"+
		"\u0211\u0216\x05V,\x02\u0212\u0213\x07C\x02\x02\u0213\u0215\x07D\x02\x02"+
		"\u0214\u0212\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214\x03"+
		"\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u021B\x03\x02\x02\x02\u0218"+
		"\u0216\x03\x02\x02\x02\u0219\u021A\x07/\x02\x02\u021A\u021C\x05T+\x02"+
		"\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03"+
		"\x02\x02\x02\u021D\u021E\x05,\x17\x02\u021EA\x03\x02\x02\x02\u021F\u0226"+
		"\x05f4\x02\u0220\u0226\x07%\x02\x02\u0221\u0226\x07\x03\x02\x02\u0222"+
		"\u0226\x07\x0E\x02\x02\u0223\u0226\x07(\x02\x02\u0224\u0226\x07)\x02\x02"+
		"\u0225\u021F\x03\x02\x02\x02\u0225\u0220\x03\x02\x02\x02\u0225\u0221\x03"+
		"\x02\x02\x02\u0225\u0222\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225"+
		"\u0224\x03\x02\x02\x02\u0226C\x03\x02\x02\x02\u0227\u0228\x05\x12\n\x02"+
		"\u0228\u0229\x05@!\x02\u0229E\x03\x02\x02\x02\u022A\u022F\x05H%\x02\u022B"+
		"\u022C\x07F\x02\x02\u022C\u022E\x05H%\x02\u022D\u022B\x03\x02\x02\x02"+
		"\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03"+
		"\x02\x02\x02\u0230G\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0232"+
		"\u0235\x05J&\x02\u0233\u0234\x07H\x02\x02\u0234\u0236\x05L\'\x02\u0235"+
		"\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236I\x03\x02\x02"+
		"\x02\u0237\u023C\x07q\x02\x02\u0238\u0239\x07C\x02\x02\u0239\u023B\x07"+
		"D\x02\x02\u023A\u0238\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C"+
		"\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023DK\x03\x02\x02"+
		"\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0242\x05N(\x02\u0240\u0242\x05"+
		"\xA4S\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242"+
		"M\x03\x02\x02\x02\u0243\u024F\x07A\x02\x02\u0244\u0249\x05L\'\x02\u0245"+
		"\u0246\x07F\x02\x02\u0246\u0248\x05L\'\x02\u0247\u0245\x03\x02\x02\x02"+
		"\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03"+
		"\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C"+
		"\u024E\x07F\x02\x02\u024D\u024C\x03\x02\x02\x02\u024D\u024E\x03\x02\x02"+
		"\x02\u024E\u0250\x03\x02\x02\x02\u024F\u0244\x03\x02\x02\x02\u024F\u0250"+
		"\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252\x07B\x02\x02"+
		"\u0252O\x03\x02\x02\x02\u0253\u0255\x07q\x02\x02\u0254\u0256\x05\xC8e"+
		"\x02\u0255\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u025E"+
		"\x03\x02\x02\x02\u0257\u0258\x07G\x02\x02\u0258\u025A\x07q\x02\x02\u0259"+
		"\u025B\x05\xC8e\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02"+
		"\x02\u025B\u025D\x03\x02\x02\x02\u025C\u0257\x03\x02\x02\x02\u025D\u0260"+
		"\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02"+
		"\u025FQ\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0268\x05\xC4"+
		"c\x02\u0262\u0265\x07M\x02\x02\u0263\u0264\t\x02\x02\x02\u0264\u0266\x05"+
		"\xC4c\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266"+
		"\u0268\x03\x02\x02\x02\u0267\u0261\x03\x02\x02\x02\u0267\u0262\x03\x02"+
		"\x02\x02\u0268S\x03\x02\x02\x02\u0269\u026E\x05^0\x02\u026A\u026B\x07"+
		"F\x02\x02\u026B\u026D\x05^0\x02\u026C\u026A\x03\x02\x02\x02\u026D\u0270"+
		"\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02"+
		"\u026FU\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0273\x07?\x02"+
		"\x02\u0272\u0274\x05X-\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274\x03"+
		"\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x07@\x02\x02\u0276"+
		"W\x03\x02\x02\x02\u0277\u027C\x05Z.\x02\u0278\u0279\x07F\x02\x02\u0279"+
		"\u027B\x05Z.\x02\u027A\u0278\x03\x02\x02\x02\u027B\u027E\x03\x02\x02\x02"+
		"\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u0281\x03"+
		"\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027F\u0280\x07F\x02\x02\u0280"+
		"\u0282\x05\\/\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02"+
		"\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0285\x05\\/\x02\u0284\u0277\x03"+
		"\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285Y\x03\x02\x02\x02\u0286"+
		"\u0288\x05\x0E\b\x02\u0287\u0286\x03\x02\x02\x02\u0288\u028B\x03\x02\x02"+
		"\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C"+
		"\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028D\x05\xC4c\x02"+
		"\u028D\u028E\x05J&\x02\u028E[\x03\x02\x02\x02\u028F\u0291\x05\x0E\b\x02"+
		"\u0290\u028F\x03\x02\x02\x02\u0291\u0294\x03\x02\x02\x02\u0292\u0290\x03"+
		"\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0295\x03\x02\x02\x02\u0294"+
		"\u0292\x03\x02\x02\x02\u0295\u0296\x05\xC4c\x02\u0296\u0297\x07m\x02\x02"+
		"\u0297\u0298\x05J&\x02\u0298]\x03\x02\x02\x02\u0299\u029E\x07q\x02\x02"+
		"\u029A\u029B\x07G\x02\x02\u029B\u029D\x07q\x02\x02\u029C\u029A\x03\x02"+
		"\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E"+
		"\u029F\x03\x02\x02\x02\u029F_\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02"+
		"\x02\u02A1\u02A8\x05b2\x02\u02A2\u02A8\x05d3\x02\u02A3\u02A8\x07<\x02"+
		"\x02\u02A4\u02A8\x07=\x02\x02\u02A5\u02A8\x07;\x02\x02\u02A6\u02A8\x07"+
		">\x02\x02\u02A7\u02A1\x03\x02\x02\x02\u02A7\u02A2\x03\x02\x02\x02\u02A7"+
		"\u02A3\x03\x02\x02\x02\u02A7\u02A4\x03\x02\x02\x02\u02A7\u02A5\x03\x02"+
		"\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A8a\x03\x02\x02\x02\u02A9\u02AA"+
		"\t\x03\x02\x02\u02AAc\x03\x02\x02\x02\u02AB\u02AC\t\x04\x02\x02\u02AC"+
		"e\x03\x02\x02\x02\u02AD\u02AE\x07l\x02\x02\u02AE\u02B5\x05^0\x02\u02AF"+
		"\u02B2\x07?\x02\x02\u02B0\u02B3\x05h5\x02\u02B1\u02B3\x05l7\x02\u02B2"+
		"\u02B0\x03\x02\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3\x03\x02"+
		"\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B6\x07@\x02\x02\u02B5\u02AF"+
		"\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6g\x03\x02\x02\x02\u02B7"+
		"\u02BC\x05j6\x02\u02B8\u02B9\x07F\x02\x02\u02B9\u02BB\x05j6\x02\u02BA"+
		"\u02B8\x03\x02\x02\x02\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03\x02"+
		"\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BDi\x03\x02\x02\x02\u02BE\u02BC"+
		"\x03\x02\x02\x02\u02BF\u02C0\x07q\x02\x02\u02C0\u02C1\x07H\x02\x02\u02C1"+
		"\u02C2\x05l7\x02\u02C2k\x03\x02\x02\x02\u02C3\u02C7\x05\xA4S\x02\u02C4"+
		"\u02C7\x05f4\x02\u02C5\u02C7\x05n8\x02\u02C6\u02C3\x03\x02\x02\x02\u02C6"+
		"\u02C4\x03\x02\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7m\x03\x02\x02"+
		"\x02\u02C8\u02D1\x07A\x02\x02\u02C9\u02CE\x05l7\x02\u02CA\u02CB\x07F\x02"+
		"\x02\u02CB\u02CD\x05l7\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD\u02D0\x03"+
		"\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF"+
		"\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1\u02C9\x03\x02"+
		"\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3"+
		"\u02D5\x07F\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02"+
		"\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D7\x07B\x02\x02\u02D7o\x03\x02"+
		"\x02\x02\u02D8\u02D9\x07l\x02\x02\u02D9\u02DA\x07\x1E\x02\x02\u02DA\u02DB"+
		"\x07q\x02\x02\u02DB\u02DC\x05r:\x02\u02DCq\x03\x02\x02\x02\u02DD\u02E1"+
		"\x07A\x02\x02\u02DE\u02E0\x05t;\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0"+
		"\u02E3\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02"+
		"\x02\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4"+
		"\u02E5\x07B\x02\x02\u02E5s\x03\x02\x02\x02\u02E6\u02E8\x05\n\x06\x02\u02E7"+
		"\u02E6\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03\x02"+
		"\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EC\x03\x02\x02\x02\u02EB"+
		"\u02E9\x03\x02\x02\x02\u02EC\u02EF\x05v<\x02\u02ED\u02EF\x07E\x02\x02"+
		"\u02EE\u02E9\x03\x02\x02\x02\u02EE\u02ED\x03\x02\x02\x02\u02EFu\x03\x02"+
		"\x02\x02\u02F0\u02F1\x05\xC4c\x02\u02F1\u02F2\x05x=\x02\u02F2\u02F3\x07"+
		"E\x02\x02\u02F3\u0305\x03\x02\x02\x02\u02F4\u02F6\x05\x10\t\x02\u02F5"+
		"\u02F7\x07E\x02\x02\u02F6\u02F5\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02"+
		"\x02\u02F7\u0305\x03\x02\x02\x02\u02F8\u02FA\x05 \x11\x02\u02F9\u02FB"+
		"\x07E\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02"+
		"\u02FB\u0305\x03\x02\x02\x02\u02FC\u02FE\x05\x18\r\x02\u02FD\u02FF\x07"+
		"E\x02\x02\u02FE\u02FD\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF"+
		"\u0305\x03\x02\x02\x02\u0300\u0302\x05p9\x02\u0301\u0303\x07E\x02\x02"+
		"\u0302\u0301\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0305\x03"+
		"\x02\x02\x02\u0304\u02F0\x03\x02\x02\x02\u0304\u02F4\x03\x02\x02\x02\u0304"+
		"\u02F8\x03\x02\x02\x02\u0304\u02FC\x03\x02\x02\x02\u0304\u0300\x03\x02"+
		"\x02\x02\u0305w\x03\x02\x02\x02\u0306\u0309\x05z>\x02\u0307\u0309\x05"+
		"|?\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309y"+
		"\x03\x02\x02\x02\u030A\u030B\x07q\x02\x02\u030B\u030C\x07?\x02\x02\u030C"+
		"\u030E\x07@\x02\x02\u030D\u030F\x05~@\x02\u030E\u030D\x03\x02\x02\x02"+
		"\u030E\u030F\x03\x02\x02\x02\u030F{\x03\x02\x02\x02\u0310\u0311\x05F$"+
		"\x02\u0311}\x03\x02\x02\x02\u0312\u0313\x07\x0E\x02\x02\u0313\u0314\x05"+
		"l7\x02\u0314\x7F\x03\x02\x02\x02\u0315\u0319\x07A\x02\x02\u0316\u0318"+
		"\x05\x82B\x02\u0317\u0316\x03\x02\x02\x02\u0318\u031B\x03\x02\x02\x02"+
		"\u0319\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031C\x03"+
		"\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031C\u031D\x07B\x02\x02\u031D"+
		"\x81\x03\x02\x02\x02\u031E\u031F\x05\x84C\x02\u031F\u0320\x07E\x02\x02"+
		"\u0320\u0324\x03\x02\x02\x02\u0321\u0324\x05\x88E\x02\u0322\u0324\x05"+
		"\x86D\x02\u0323\u031E\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323"+
		"\u0322\x03\x02\x02\x02\u0324\x83\x03\x02\x02\x02\u0325\u0327\x05\x0E\b"+
		"\x02\u0326\u0325\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326"+
		"\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x03\x02\x02\x02"+
		"\u032A\u0328\x03\x02\x02\x02\u032B\u032C\x05\xC4c\x02\u032C\u032D\x05"+
		"F$\x02\u032D\x85\x03\x02\x02\x02\u032E\u0330\x05\f\x07\x02\u032F\u032E"+
		"\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02"+
		"\u0331\u0332\x03\x02\x02\x02\u0332\u0336\x03\x02\x02\x02\u0333\u0331\x03"+
		"\x02\x02\x02\u0334\u0337\x05\x10\t\x02\u0335\u0337\x05 \x11\x02\u0336"+
		"\u0334\x03\x02\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337\u033A\x03\x02"+
		"\x02\x02\u0338\u033A\x07E\x02\x02\u0339\u0331\x03\x02\x02\x02\u0339\u0338"+
		"\x03\x02\x02\x02\u033A\x87\x03\x02\x02\x02\u033B\u03A4\x05\x80A\x02\u033C"+
		"\u033D\x07\x04\x02\x02\u033D\u0340\x05\xA4S\x02\u033E\u033F\x07N\x02\x02"+
		"\u033F\u0341\x05\xA4S\x02\u0340\u033E\x03\x02\x02\x02\u0340\u0341\x03"+
		"\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x07E\x02\x02\u0343"+
		"\u03A4\x03\x02\x02\x02\u0344\u0345\x07\x18\x02\x02\u0345\u0346\x05\xA0"+
		"Q\x02\u0346\u0349\x05\x88E\x02\u0347\u0348\x07\x11\x02\x02\u0348\u034A"+
		"\x05\x88E\x02\u0349\u0347\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02"+
		"\u034A\u03A4\x03\x02\x02\x02\u034B\u034C\x07\x17\x02\x02\u034C\u034D\x07"+
		"?\x02\x02\u034D\u034E\x05\x9AN\x02\u034E\u034F\x07@\x02\x02\u034F\u0350"+
		"\x05\x88E\x02\u0350\u03A4\x03\x02\x02\x02\u0351\u0352\x074\x02\x02\u0352"+
		"\u0353\x05\xA0Q\x02\u0353\u0354\x05\x88E\x02\u0354\u03A4\x03\x02\x02\x02"+
		"\u0355\u0356\x07\x0F\x02\x02\u0356\u0357\x05\x88E\x02\u0357\u0358\x07"+
		"4\x02\x02\u0358\u0359\x05\xA0Q\x02\u0359\u035A\x07E\x02\x02\u035A\u03A4"+
		"\x03\x02\x02\x02\u035B\u035C\x071\x02\x02\u035C\u0366\x05\x80A\x02\u035D"+
		"\u035F\x05\x8AF\x02\u035E\u035D\x03\x02\x02\x02\u035F\u0360\x03\x02\x02"+
		"\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0363"+
		"\x03\x02\x02\x02\u0362\u0364\x05\x8EH\x02\u0363\u0362\x03\x02\x02\x02"+
		"\u0363\u0364\x03\x02\x02\x02\u0364\u0367\x03\x02\x02\x02\u0365\u0367\x05"+
		"\x8EH\x02\u0366\u035E\x03\x02\x02\x02\u0366\u0365\x03\x02\x02\x02\u0367"+
		"\u03A4\x03\x02\x02\x02\u0368\u0369\x071\x02\x02\u0369\u036A\x05\x90I\x02"+
		"\u036A\u036E\x05\x80A\x02\u036B\u036D\x05\x8AF\x02\u036C\u036B\x03\x02"+
		"\x02\x02\u036D\u0370\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036E"+
		"\u036F\x03\x02\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02"+
		"\x02\x02\u0371\u0373\x05\x8EH\x02\u0372\u0371\x03\x02\x02\x02\u0372\u0373"+
		"\x03\x02\x02\x02\u0373\u03A4\x03\x02\x02\x02\u0374\u0375\x07+\x02\x02"+
		"\u0375\u0376\x05\xA0Q\x02\u0376\u037A\x07A\x02\x02\u0377\u0379\x05\x96"+
		"L\x02\u0378\u0377\x03\x02\x02\x02\u0379\u037C\x03\x02\x02\x02\u037A\u0378"+
		"\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u0380\x03\x02\x02\x02"+
		"\u037C\u037A\x03\x02\x02\x02\u037D\u037F\x05\x98M\x02\u037E\u037D\x03"+
		"\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380"+
		"\u0381\x03\x02\x02\x02\u0381\u0383\x03\x02\x02\x02\u0382\u0380\x03\x02"+
		"\x02\x02\u0383\u0384\x07B\x02\x02\u0384\u03A4\x03\x02\x02\x02\u0385\u0386"+
		"\x07,\x02\x02\u0386\u0387\x05\xA0Q\x02\u0387\u0388\x05\x80A\x02\u0388"+
		"\u03A4\x03\x02\x02\x02\u0389\u038B\x07&\x02\x02\u038A\u038C\x05\xA4S\x02"+
		"\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038D\x03"+
		"\x02\x02\x02\u038D\u03A4\x07E\x02\x02\u038E\u038F\x07.\x02\x02\u038F\u0390"+
		"\x05\xA4S\x02\u0390\u0391\x07E\x02\x02\u0391\u03A4\x03\x02\x02\x02\u0392"+
		"\u0394\x07\x06\x02\x02\u0393\u0395\x07q\x02\x02\u0394\u0393\x03\x02\x02"+
		"\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u03A4"+
		"\x07E\x02\x02\u0397\u0399\x07\r\x02\x02\u0398\u039A\x07q\x02\x02\u0399"+
		"\u0398\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039B\x03\x02"+
		"\x02\x02\u039B\u03A4\x07E\x02\x02\u039C\u03A4\x07E\x02\x02\u039D\u039E"+
		"\x05\xA4S\x02\u039E\u039F\x07E\x02\x02\u039F\u03A4\x03\x02\x02\x02\u03A0"+
		"\u03A1\x07q\x02\x02\u03A1\u03A2\x07N\x02\x02\u03A2\u03A4\x05\x88E\x02"+
		"\u03A3\u033B\x03\x02\x02\x02\u03A3\u033C\x03\x02\x02\x02\u03A3\u0344\x03"+
		"\x02\x02\x02\u03A3\u034B\x03\x02\x02\x02\u03A3\u0351\x03\x02\x02\x02\u03A3"+
		"\u0355\x03\x02\x02\x02\u03A3\u035B\x03\x02\x02\x02\u03A3\u0368\x03\x02"+
		"\x02\x02\u03A3\u0374\x03\x02\x02\x02\u03A3\u0385\x03\x02\x02\x02\u03A3"+
		"\u0389\x03\x02\x02\x02\u03A3\u038E\x03\x02\x02\x02\u03A3\u0392\x03\x02"+
		"\x02\x02\u03A3\u0397\x03\x02\x02\x02\u03A3\u039C\x03\x02\x02\x02\u03A3"+
		"\u039D\x03\x02\x02\x02\u03A3\u03A0\x03\x02\x02\x02\u03A4\x89\x03\x02\x02"+
		"\x02\u03A5\u03A6\x07\t\x02\x02\u03A6\u03AA\x07?\x02\x02\u03A7\u03A9\x05"+
		"\x0E\b\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA"+
		"\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD\x03\x02"+
		"\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03AE\x05\x8CG\x02\u03AE\u03AF"+
		"\x07q\x02\x02\u03AF\u03B0\x07@\x02\x02\u03B0\u03B1\x05\x80A\x02\u03B1"+
		"\x8B\x03\x02\x02\x02\u03B2\u03B7\x05^0\x02\u03B3\u03B4\x07\\\x02\x02\u03B4"+
		"\u03B6\x05^0\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B9\x03\x02\x02\x02"+
		"\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\x8D\x03"+
		"\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BB\x07\x15\x02\x02\u03BB"+
		"\u03BC\x05\x80A\x02\u03BC\x8F\x03\x02\x02\x02\u03BD\u03BE\x07?\x02\x02"+
		"\u03BE\u03C0\x05\x92J\x02\u03BF\u03C1\x07E\x02\x02\u03C0\u03BF\x03\x02"+
		"\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2"+
		"\u03C3\x07@\x02\x02\u03C3\x91\x03\x02\x02\x02\u03C4\u03C9\x05\x94K\x02"+
		"\u03C5\u03C6\x07E\x02\x02\u03C6\u03C8\x05\x94K\x02\u03C7\u03C5\x03\x02"+
		"\x02\x02\u03C8\u03CB\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9"+
		"\u03CA\x03\x02\x02\x02\u03CA\x93\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02"+
		"\x02\u03CC\u03CE\x05\x0E\b\x02\u03CD\u03CC\x03\x02\x02\x02\u03CE\u03D1"+
		"\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02"+
		"\u03D0\u03D2\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D3\x05"+
		"P)\x02\u03D3\u03D4\x05J&\x02\u03D4\u03D5\x07H\x02\x02\u03D5\u03D6\x05"+
		"\xA4S\x02\u03D6\x95\x03\x02\x02\x02\u03D7\u03D9\x05\x98M\x02\u03D8\u03D7"+
		"\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02"+
		"\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03DE\x05"+
		"\x82B\x02\u03DD\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF"+
		"\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\x97\x03\x02\x02"+
		"\x02\u03E1\u03E4\x07\b\x02\x02\u03E2\u03E5\x05\xA4S\x02\u03E3\u03E5\x07"+
		"q\x02\x02\u03E4\u03E2\x03\x02\x02\x02\u03E4\u03E3\x03\x02\x02\x02\u03E5"+
		"\u03E6\x03\x02\x02\x02\u03E6\u03EA\x07N\x02\x02\u03E7\u03E8\x07\x0E\x02"+
		"\x02\u03E8\u03EA\x07N\x02\x02\u03E9\u03E1\x03\x02\x02\x02\u03E9\u03E7"+
		"\x03\x02\x02\x02\u03EA\x99\x03\x02\x02\x02\u03EB\u03F8\x05\x9EP\x02\u03EC"+
		"\u03EE\x05\x9CO\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02"+
		"\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F1\x07E\x02\x02\u03F0\u03F2"+
		"\x05\xA4S\x02\u03F1\u03F0\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02"+
		"\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F5\x07E\x02\x02\u03F4\u03F6\x05"+
		"\xA2R\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6"+
		"\u03F8\x03\x02\x02\x02\u03F7\u03EB\x03\x02\x02\x02\u03F7\u03ED\x03\x02"+
		"\x02\x02\u03F8\x9B\x03\x02\x02\x02\u03F9\u03FC\x05\x84C\x02\u03FA\u03FC"+
		"\x05\xA2R\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FA\x03\x02\x02\x02"+
		"\u03FC\x9D\x03\x02\x02\x02\u03FD\u03FF\x05\x0E\b\x02\u03FE\u03FD\x03\x02"+
		"\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0400"+
		"\u0401\x03\x02\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402\u0400\x03\x02"+
		"\x02\x02\u0403\u0404\x05\xC4c\x02\u0404\u0405\x05J&\x02\u0405\u0406\x07"+
		"N\x02\x02\u0406\u0407\x05\xA4S\x02\u0407\x9F\x03\x02\x02\x02\u0408\u0409"+
		"\x07?\x02\x02\u0409\u040A\x05\xA4S\x02\u040A\u040B\x07@\x02\x02\u040B"+
		"\xA1\x03\x02\x02\x02\u040C\u0411\x05\xA4S\x02\u040D\u040E\x07F\x02\x02"+
		"\u040E\u0410\x05\xA4S\x02\u040F\u040D\x03\x02\x02\x02\u0410\u0413\x03"+
		"\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412"+
		"\xA3\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0414\u0415\bS\x01\x02"+
		"\u0415\u0433\x05\xACW\x02\u0416\u0417\x07!\x02\x02\u0417\u0433\x05\xB0"+
		"Y\x02\u0418\u0419\x07?\x02\x02\u0419\u041A\x05\xC4c\x02\u041A\u041B\x07"+
		"@\x02\x02\u041B\u041C\x05\xA4S";
	private static readonly _serializedATNSegment2: string =
		"\x17\u041C\u0433\x03\x02\x02\x02\u041D\u041E\t\x05\x02\x02\u041E\u0433"+
		"\x05\xA4S\x15\u041F\u0420\t\x06\x02\x02\u0420\u0433\x05\xA4S\x14\u0421"+
		"\u0433\x05\xA6T\x02\u0422\u0423\x05\xC4c\x02\u0423\u0429\x07k\x02\x02"+
		"\u0424\u0426\x05\xC8e\x02\u0425\u0424\x03\x02\x02\x02\u0425\u0426\x03"+
		"\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u042A\x07q\x02\x02\u0428"+
		"\u042A\x07!\x02\x02\u0429\u0425\x03\x02\x02\x02\u0429\u0428\x03\x02\x02"+
		"\x02\u042A\u0433\x03\x02\x02\x02\u042B\u042C\x05\xAEX\x02\u042C\u042E"+
		"\x07k\x02\x02\u042D\u042F\x05\xC8e\x02\u042E\u042D\x03\x02\x02\x02\u042E"+
		"\u042F\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0431\x07!\x02"+
		"\x02\u0431\u0433\x03\x02\x02\x02\u0432\u0414\x03\x02\x02\x02\u0432\u0416"+
		"\x03\x02\x02\x02\u0432\u0418\x03\x02\x02\x02\u0432\u041D\x03\x02\x02\x02"+
		"\u0432\u041F\x03\x02\x02\x02\u0432\u0421\x03\x02\x02\x02\u0432\u0422\x03"+
		"\x02\x02\x02\u0432\u042B\x03\x02\x02\x02\u0433\u0489\x03\x02\x02\x02\u0434"+
		"\u0435\f\x13\x02\x02\u0435\u0436\t\x07\x02\x02\u0436\u0488\x05\xA4S\x14"+
		"\u0437\u0438\f\x12\x02\x02\u0438\u0439\t\b\x02\x02\u0439\u0488\x05\xA4"+
		"S\x13\u043A\u0442\f\x11\x02\x02\u043B\u043C\x07J\x02\x02\u043C\u0443\x07"+
		"J\x02\x02\u043D\u043E\x07I\x02\x02\u043E\u043F\x07I\x02\x02\u043F\u0443"+
		"\x07I\x02\x02\u0440\u0441\x07I\x02\x02\u0441\u0443\x07I\x02\x02\u0442"+
		"\u043B\x03\x02\x02\x02\u0442\u043D\x03\x02\x02\x02\u0442\u0440\x03\x02"+
		"\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0488\x05\xA4S\x12\u0445\u0446"+
		"\f\x10\x02\x02\u0446\u0447\t\t\x02\x02\u0447\u0488\x05\xA4S\x11\u0448"+
		"\u0449\f\x0E\x02\x02\u0449\u044A\t\n\x02\x02\u044A\u0488\x05\xA4S\x0F"+
		"\u044B\u044C\f\r\x02\x02\u044C\u044D\x07[\x02\x02\u044D\u0488\x05\xA4"+
		"S\x0E\u044E\u044F\f\f\x02\x02\u044F\u0450\x07]\x02\x02\u0450\u0488\x05"+
		"\xA4S\r\u0451\u0452\f\v\x02\x02\u0452\u0453\x07\\\x02\x02\u0453\u0488"+
		"\x05\xA4S\f\u0454\u0455\f\n\x02\x02\u0455\u0456\x07S\x02\x02\u0456\u0488"+
		"\x05\xA4S\v\u0457\u0458\f\t\x02\x02\u0458\u0459\x07T\x02\x02\u0459\u0488"+
		"\x05\xA4S\n\u045A\u045B\f\b\x02\x02\u045B\u045C\x07M\x02\x02\u045C\u045D"+
		"\x05\xA4S\x02\u045D\u045E\x07N\x02\x02\u045E\u045F\x05\xA4S\t\u045F\u0488"+
		"\x03\x02\x02\x02\u0460\u0461\f\x07\x02\x02\u0461\u0462\t\v\x02\x02\u0462"+
		"\u0488\x05\xA4S\x07\u0463\u0464\f\x1B\x02\x02\u0464\u046F\x07G\x02\x02"+
		"\u0465\u0470\x07q\x02\x02\u0466\u0470\x07-\x02\x02\u0467\u0469\x07!\x02"+
		"\x02\u0468\u046A\x05\xC0a\x02\u0469\u0468\x03\x02\x02\x02\u0469\u046A"+
		"\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u0470\x05\xB4[\x02"+
		"\u046C\u046D\x07*\x02\x02\u046D\u0470\x05\xCAf\x02\u046E\u0470\x05\xBA"+
		"^\x02\u046F\u0465\x03\x02\x02\x02\u046F\u0466\x03\x02\x02\x02\u046F\u0467"+
		"\x03\x02\x02\x02\u046F\u046C\x03\x02\x02\x02\u046F\u046E\x03\x02\x02\x02"+
		"\u0470\u0488\x03\x02\x02\x02\u0471\u0472\f\x1A\x02\x02\u0472\u0473\x07"+
		"C\x02\x02\u0473\u0474\x05\xA4S\x02\u0474\u0475\x07D\x02\x02\u0475\u0488"+
		"\x03\x02\x02\x02\u0476\u0477\f\x19\x02\x02\u0477\u0479\x07?\x02\x02\u0478"+
		"\u047A\x05\xA2R\x02\u0479\u0478\x03\x02\x02\x02\u0479\u047A\x03\x02\x02"+
		"\x02\u047A\u047B\x03\x02\x02\x02\u047B\u0488\x07@\x02\x02\u047C\u047D"+
		"\f\x16\x02\x02\u047D\u0488\t\f\x02\x02\u047E\u047F\f\x0F\x02\x02\u047F"+
		"\u0480\x07\x1C\x02\x02\u0480\u0488\x05\xC4c\x02\u0481\u0482\f\x05\x02"+
		"\x02\u0482\u0484\x07k\x02\x02\u0483\u0485\x05\xC8e\x02\u0484\u0483\x03"+
		"\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486"+
		"\u0488\x07q\x02\x02\u0487\u0434\x03\x02\x02\x02\u0487\u0437\x03\x02\x02"+
		"\x02\u0487\u043A\x03\x02\x02\x02\u0487\u0445\x03\x02\x02\x02\u0487\u0448"+
		"\x03\x02\x02\x02\u0487\u044B\x03\x02\x02\x02\u0487\u044E\x03\x02\x02\x02"+
		"\u0487\u0451\x03\x02\x02\x02\u0487\u0454\x03\x02\x02\x02\u0487\u0457\x03"+
		"\x02\x02\x02\u0487\u045A\x03\x02\x02\x02\u0487\u0460\x03\x02\x02\x02\u0487"+
		"\u0463\x03\x02\x02\x02\u0487\u0471\x03\x02\x02\x02\u0487\u0476\x03\x02"+
		"\x02\x02\u0487\u047C\x03\x02\x02\x02\u0487\u047E\x03\x02\x02\x02\u0487"+
		"\u0481\x03\x02\x02\x02\u0488\u048B\x03\x02\x02\x02\u0489\u0487\x03\x02"+
		"\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\xA5\x03\x02\x02\x02\u048B\u0489"+
		"\x03\x02\x02\x02\u048C\u048D\x05\xA8U\x02\u048D\u048E\x07j\x02\x02\u048E"+
		"\u048F\x05\xAAV\x02\u048F\xA7\x03\x02\x02\x02\u0490\u04A1\x07q\x02\x02"+
		"\u0491\u0493\x07?\x02\x02\u0492\u0494\x05X-\x02\u0493\u0492\x03\x02\x02"+
		"\x02\u0493\u0494\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u04A1"+
		"\x07@\x02\x02\u0496\u0497\x07?\x02\x02\u0497\u049C\x07q\x02\x02\u0498"+
		"\u0499\x07F\x02\x02\u0499\u049B\x07q\x02\x02\u049A\u0498\x03\x02\x02\x02"+
		"\u049B\u049E\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C\u049D\x03"+
		"\x02\x02\x02\u049D\u049F\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049F"+
		"\u04A1\x07@\x02\x02\u04A0\u0490\x03\x02\x02\x02\u04A0\u0491\x03\x02\x02"+
		"\x02\u04A0\u0496\x03\x02\x02\x02\u04A1\xA9\x03\x02\x02\x02\u04A2\u04A5"+
		"\x05\xA4S\x02\u04A3\u04A5\x05\x80A\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4"+
		"\u04A3\x03\x02\x02\x02\u04A5\xAB\x03\x02\x02\x02\u04A6\u04A7\x07?\x02"+
		"\x02\u04A7\u04A8\x05\xA4S\x02\u04A8\u04A9\x07@\x02\x02\u04A9\u04B9\x03"+
		"\x02\x02\x02\u04AA\u04B9\x07-\x02\x02\u04AB\u04B9\x07*\x02\x02\u04AC\u04B9"+
		"\x05`1\x02\u04AD\u04B9\x07q\x02\x02\u04AE\u04AF\x05.\x18\x02\u04AF\u04B0"+
		"\x07G\x02\x02\u04B0\u04B1\x07\v\x02\x02\u04B1\u04B9\x03\x02\x02\x02\u04B2"+
		"\u04B6\x05\xC0a\x02\u04B3\u04B7\x05\xCCg\x02\u04B4\u04B5\x07-\x02\x02"+
		"\u04B5\u04B7\x05\xCEh\x02\u04B6\u04B3\x03\x02\x02\x02\u04B6\u04B4\x03"+
		"\x02\x02\x02\u04B7\u04B9\x03\x02\x02\x02\u04B8\u04A6\x03\x02\x02\x02\u04B8"+
		"\u04AA\x03\x02\x02\x02\u04B8\u04AB\x03\x02\x02\x02\u04B8\u04AC\x03\x02"+
		"\x02\x02\u04B8\u04AD\x03\x02\x02\x02\u04B8\u04AE\x03\x02\x02\x02\u04B8"+
		"\u04B2\x03\x02\x02\x02\u04B9\xAD\x03\x02\x02\x02\u04BA\u04BB\x05P)\x02"+
		"\u04BB\u04BC\x07G\x02\x02\u04BC\u04BE\x03\x02\x02\x02\u04BD\u04BA\x03"+
		"\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04C2\x03\x02\x02\x02\u04BF"+
		"\u04C1\x05f4\x02\u04C0\u04BF\x03\x02\x02\x02\u04C1\u04C4\x03\x02\x02\x02"+
		"\u04C2\u04C0\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C5\x03"+
		"\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C5\u04C7\x07q\x02\x02\u04C6"+
		"\u04C8\x05\xC8e\x02\u04C7\u04C6\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02"+
		"\x02\u04C8\xAF\x03\x02\x02\x02\u04C9\u04CA\x05\xC0a\x02\u04CA\u04CB\x05"+
		"\xB2Z\x02\u04CB\u04CC\x05\xB8]\x02\u04CC\u04D3\x03\x02\x02\x02\u04CD\u04D0"+
		"\x05\xB2Z\x02\u04CE\u04D1\x05\xB6\\\x02\u04CF\u04D1\x05\xB8]\x02\u04D0"+
		"\u04CE\x03\x02\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D1\u04D3\x03\x02"+
		"\x02\x02\u04D2\u04C9\x03\x02\x02\x02\u04D2\u04CD\x03\x02\x02\x02\u04D3"+
		"\xB1\x03\x02\x02\x02\u04D4\u04D6\x07q\x02\x02\u04D5\u04D7\x05\xBC_\x02"+
		"\u04D6\u04D5\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04DF\x03"+
		"\x02\x02\x02\u04D8\u04D9\x07G\x02\x02\u04D9\u04DB\x07q\x02\x02\u04DA\u04DC"+
		"\x05\xBC_\x02\u04DB\u04DA\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02"+
		"\u04DC\u04DE\x03\x02\x02\x02\u04DD\u04D8\x03\x02\x02\x02\u04DE\u04E1\x03"+
		"\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0"+
		"\u04E4\x03\x02\x02\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2\u04E4\x05\xC6"+
		"d\x02\u04E3\u04D4\x03\x02\x02\x02\u04E3\u04E2\x03\x02\x02\x02\u04E4\xB3"+
		"\x03\x02\x02\x02\u04E5\u04E7\x07q\x02\x02\u04E6\u04E8\x05\xBE`\x02\u04E7"+
		"\u04E6\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8\u04E9\x03\x02"+
		"\x02\x02\u04E9\u04EA\x05\xB8]\x02\u04EA\xB5\x03\x02\x02\x02\u04EB\u0507"+
		"\x07C\x02\x02\u04EC\u04F1\x07D\x02\x02\u04ED\u04EE\x07C\x02\x02\u04EE"+
		"\u04F0\x07D\x02\x02\u04EF\u04ED\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02"+
		"\x02\u04F1\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F4"+
		"\x03\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u0508\x05N(\x02\u04F5"+
		"\u04F6\x05\xA4S\x02\u04F6\u04FD\x07D\x02\x02\u04F7\u04F8\x07C\x02\x02"+
		"\u04F8\u04F9\x05\xA4S\x02\u04F9\u04FA\x07D\x02\x02\u04FA\u04FC\x03\x02"+
		"\x02\x02\u04FB\u04F7\x03\x02\x02\x02\u04FC\u04FF\x03\x02\x02\x02\u04FD"+
		"\u04FB\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0504\x03\x02"+
		"\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u0500\u0501\x07C\x02\x02\u0501\u0503"+
		"\x07D\x02\x02\u0502\u0500\x03\x02\x02\x02\u0503\u0506\x03\x02\x02\x02"+
		"\u0504\u0502\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0508\x03"+
		"\x02\x02\x02\u0506\u0504\x03\x02\x02\x02\u0507\u04EC\x03\x02\x02\x02\u0507"+
		"\u04F5\x03\x02\x02\x02\u0508\xB7\x03\x02\x02\x02\u0509\u050B\x05\xCEh"+
		"\x02\u050A\u050C\x05\"\x12\x02\u050B\u050A\x03\x02\x02\x02\u050B\u050C"+
		"\x03\x02\x02\x02\u050C\xB9\x03\x02\x02\x02\u050D\u050E\x05\xC0a\x02\u050E"+
		"\u050F\x05\xCCg\x02\u050F\xBB\x03\x02\x02\x02\u0510\u0511\x07J\x02\x02"+
		"\u0511\u0514\x07I\x02\x02\u0512\u0514\x05\xC8e\x02\u0513\u0510\x03\x02"+
		"\x02\x02\u0513\u0512\x03\x02\x02\x02\u0514\xBD\x03\x02\x02\x02\u0515\u0516"+
		"\x07J\x02\x02\u0516\u0519\x07I\x02\x02\u0517\u0519\x05\xC0a\x02\u0518"+
		"\u0515\x03\x02\x02\x02\u0518\u0517\x03\x02\x02\x02\u0519\xBF\x03\x02\x02"+
		"\x02\u051A\u051B\x07J\x02\x02\u051B\u051C\x05\xC2b\x02\u051C\u051D\x07"+
		"I\x02\x02\u051D\xC1\x03\x02\x02\x02\u051E\u0523\x05\xC4c\x02\u051F\u0520"+
		"\x07F\x02\x02\u0520\u0522\x05\xC4c\x02\u0521\u051F\x03\x02\x02\x02\u0522"+
		"\u0525\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0523\u0524\x03\x02"+
		"\x02\x02\u0524\xC3\x03\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0526\u0528"+
		"\x05f4\x02\u0527\u0526\x03\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528"+
		"\u052B\x03\x02\x02\x02\u0529\u052C\x05P)\x02\u052A\u052C\x05\xC6d\x02"+
		"\u052B\u0529\x03\x02\x02\x02\u052B\u052A\x03\x02\x02\x02\u052C\u0531\x03"+
		"\x02\x02\x02\u052D\u052E\x07C\x02\x02\u052E\u0530\x07D\x02\x02\u052F\u052D"+
		"\x03\x02\x02\x02\u0530\u0533\x03\x02\x02\x02\u0531\u052F\x03\x02\x02\x02"+
		"\u0531\u0532\x03\x02\x02\x02\u0532\xC5\x03\x02\x02\x02\u0533\u0531\x03"+
		"\x02\x02\x02\u0534\u0535\t\r\x02\x02\u0535\xC7\x03\x02\x02\x02\u0536\u0537"+
		"\x07J\x02\x02\u0537\u053C\x05R*\x02\u0538\u0539\x07F\x02\x02\u0539\u053B"+
		"\x05R*\x02\u053A\u0538\x03\x02\x02\x02\u053B\u053E\x03\x02\x02\x02\u053C"+
		"\u053A\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053F\x03\x02"+
		"\x02\x02\u053E\u053C\x03\x02\x02\x02\u053F\u0540\x07I\x02\x02\u0540\xC9"+
		"\x03\x02\x02\x02\u0541\u0548\x05\xCEh\x02\u0542\u0543\x07G\x02\x02\u0543"+
		"\u0545\x07q\x02\x02\u0544\u0546\x05\xCEh\x02\u0545\u0544\x03\x02\x02\x02"+
		"\u0545\u0546\x03\x02\x02\x02\u0546\u0548\x03\x02\x02\x02\u0547\u0541\x03"+
		"\x02\x02\x02\u0547\u0542\x03\x02\x02\x02\u0548\xCB\x03\x02\x02\x02\u0549"+
		"\u054A\x07*\x02\x02\u054A\u054E\x05\xCAf\x02\u054B\u054C\x07q\x02\x02"+
		"\u054C\u054E\x05\xCEh\x02\u054D\u0549\x03\x02\x02\x02\u054D\u054B\x03"+
		"\x02\x02\x02\u054E\xCD\x03\x02\x02\x02\u054F\u0551\x07?\x02\x02\u0550"+
		"\u0552\x05\xA2R\x02\u0551\u0550\x03\x02\x02\x02\u0551\u0552\x03\x02\x02"+
		"\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0554\x07@\x02\x02\u0554\xCF\x03"+
		"\x02\x02\x02\xAA\xD1\xD6\xDC\xE4\xED\xF2\xF9\u0100\u0103\u010A\u0114\u0118"+
		"\u011D\u0121\u0125\u012F\u0137\u013D\u0144\u014B\u014F\u0152\u0155\u015E"+
		"\u0164\u0169\u016C\u0172\u0178\u017C\u0184\u018D\u0194\u019A\u019E\u01A9"+
		"\u01B2\u01B7\u01BD\u01C1\u01CD\u01D8\u01DD\u01E6\u01EE\u01F8\u0201\u0209"+
		"\u020E\u0216\u021B\u0225\u022F\u0235\u023C\u0241\u0249\u024D\u024F\u0255"+
		"\u025A\u025E\u0265\u0267\u026E\u0273\u027C\u0281\u0284\u0289\u0292\u029E"+
		"\u02A7\u02B2\u02B5\u02BC\u02C6\u02CE\u02D1\u02D4\u02E1\u02E9\u02EE\u02F6"+
		"\u02FA\u02FE\u0302\u0304\u0308\u030E\u0319\u0323\u0328\u0331\u0336\u0339"+
		"\u0340\u0349\u0360\u0363\u0366\u036E\u0372\u037A\u0380\u038B\u0394\u0399"+
		"\u03A3\u03AA\u03B7\u03C0\u03C9\u03CF\u03DA\u03DF\u03E4\u03E9\u03ED\u03F1"+
		"\u03F5\u03F7\u03FB\u0400\u0411\u0425\u0429\u042E\u0432\u0442\u0469\u046F"+
		"\u0479\u0484\u0487\u0489\u0493\u049C\u04A0\u04A4\u04B6\u04B8\u04BD\u04C2"+
		"\u04C7\u04D0\u04D2\u04D6\u04DB\u04DF\u04E3\u04E7\u04F1\u04FD\u0504\u0507"+
		"\u050B\u0513\u0518\u0523\u0527\u052B\u0531\u053C\u0545\u0547\u054D\u0551";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaParser._serializedATNSegment0,
			JavaParser._serializedATNSegment1,
			JavaParser._serializedATNSegment2
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaParser.__ATN) {
			JavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
		}

		return JavaParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_compilationUnit; }
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(JavaParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_packageDeclaration; }
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(JavaParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_importDeclaration; }
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeDeclaration; }
}


export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_modifier; }
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceModifier; }
}


export class VariableModifierContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FINAL, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableModifier; }
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(JavaParser.CLASS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classDeclaration; }
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeParameters; }
}


export class TypeParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeParameter; }
}


export class TypeBoundContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeBound; }
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(JavaParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumDeclaration; }
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumConstants; }
}


export class EnumConstantContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumConstant; }
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumBodyDeclarations; }
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(JavaParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceDeclaration; }
}


export class ClassBodyContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classBody; }
}


export class InterfaceBodyContext extends ParserRuleContext {
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceBody; }
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classBodyDeclaration; }
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_memberDeclaration; }
}


export class MethodDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_methodDeclaration; }
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_methodBody; }
}


export class TypeTypeOrVoidContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(JavaParser.VOID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeTypeOrVoid; }
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_genericMethodDeclaration; }
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_genericConstructorDeclaration; }
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody: BlockContext;
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constructorDeclaration; }
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_fieldDeclaration; }
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceBodyDeclaration; }
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceMemberDeclaration; }
}


export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constDeclaration; }
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constantDeclarator; }
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodDeclaration; }
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodModifier; }
}


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getRuleContext(0, InterfaceMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_genericInterfaceMethodDeclaration; }
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableDeclarators; }
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableDeclarator; }
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableDeclaratorId; }
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableInitializer; }
}


export class ArrayInitializerContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_arrayInitializer; }
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceType; }
}


export class TypeArgumentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeArgument; }
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_qualifiedNameList; }
}


export class FormalParametersContext extends ParserRuleContext {
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_formalParameters; }
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_formalParameterList; }
}


export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_formalParameter; }
}


export class LastFormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_lastFormalParameter; }
}


export class QualifiedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_qualifiedName; }
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_literal; }
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DECIMAL_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.HEX_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OCT_LITERAL, 0); }
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BINARY_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_integerLiteral; }
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FLOAT_LITERAL, 0); }
	public HEX_FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(JavaParser.HEX_FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_floatLiteral; }
}


export class AnnotationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotation; }
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValuePairs; }
}


export class ElementValuePairContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValuePair; }
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValue; }
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValueArrayInitializer; }
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(JavaParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeDeclaration; }
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeBody; }
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementDeclaration; }
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementRest; }
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationMethodOrConstantRest; }
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationMethodRest; }
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationConstantRest; }
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(JavaParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_defaultValue; }
}


export class BlockContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_block; }
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public localTypeDeclaration(): LocalTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_blockStatement; }
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_localVariableDeclaration; }
}


export class LocalTypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_localTypeDeclaration; }
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel: BlockContext;
	public _statementExpression: ExpressionContext;
	public _identifierLabel: Token;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FOR, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DO, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(JavaParser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SWITCH, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CONTINUE, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_statement; }
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(JavaParser.CATCH, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_catchClause; }
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_catchType; }
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(JavaParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_finallyBlock; }
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_resourceSpecification; }
}


export class ResourcesContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_resources; }
}


export class ResourceContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_resource; }
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_switchBlockStatementGroup; }
}


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression: ExpressionContext;
	public _enumConstantName: Token;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_switchLabel; }
}


export class ForControlContext extends ParserRuleContext {
	public _forUpdate: ExpressionListContext;
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_forControl; }
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_forInit; }
}


export class EnhancedForControlContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enhancedForControl; }
}


export class ParExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_parExpression; }
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_expressionList; }
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix: Token;
	public _bop: Token;
	public _postfix: Token;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(JavaParser.NEW, 0); }
	public innerCreator(): InnerCreatorContext | undefined {
		return this.tryGetRuleContext(0, InnerCreatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INSTANCEOF, 0); }
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_expression; }
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_lambdaExpression; }
}


export class LambdaParametersContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_lambdaParameters; }
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_lambdaBody; }
}


export class PrimaryContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CLASS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_primary; }
}


export class ClassTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classType; }
}


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_creator; }
}


export class CreatedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.IDENTIFIER);
		} else {
			return this.getToken(JavaParser.IDENTIFIER, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_createdName; }
}


export class InnerCreatorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JavaParser.IDENTIFIER, 0); }
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_innerCreator; }
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_arrayCreatorRest; }
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classCreatorRest; }
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocation; }
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeArgumentsOrDiamond; }
}


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArguments; }
}


export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeList; }
}


export class TypeTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeType; }
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BOOLEAN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CHAR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(JavaParser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_primitiveType; }
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeArguments; }
}


export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_superSuffix; }
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocationSuffix; }
}


export class ArgumentsContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_arguments; }
}


