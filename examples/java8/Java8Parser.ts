// Generated from examples/java8/Java8.g4 by ANTLR 4.6-SNAPSHOT


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


export class Java8Parser extends Parser {
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
	public static readonly IntegerLiteral=51;
	public static readonly FloatingPointLiteral=52;
	public static readonly BooleanLiteral=53;
	public static readonly CharacterLiteral=54;
	public static readonly StringLiteral=55;
	public static readonly NullLiteral=56;
	public static readonly LPAREN=57;
	public static readonly RPAREN=58;
	public static readonly LBRACE=59;
	public static readonly RBRACE=60;
	public static readonly LBRACK=61;
	public static readonly RBRACK=62;
	public static readonly SEMI=63;
	public static readonly COMMA=64;
	public static readonly DOT=65;
	public static readonly ASSIGN=66;
	public static readonly GT=67;
	public static readonly LT=68;
	public static readonly BANG=69;
	public static readonly TILDE=70;
	public static readonly QUESTION=71;
	public static readonly COLON=72;
	public static readonly EQUAL=73;
	public static readonly LE=74;
	public static readonly GE=75;
	public static readonly NOTEQUAL=76;
	public static readonly AND=77;
	public static readonly OR=78;
	public static readonly INC=79;
	public static readonly DEC=80;
	public static readonly ADD=81;
	public static readonly SUB=82;
	public static readonly MUL=83;
	public static readonly DIV=84;
	public static readonly BITAND=85;
	public static readonly BITOR=86;
	public static readonly CARET=87;
	public static readonly MOD=88;
	public static readonly ARROW=89;
	public static readonly COLONCOLON=90;
	public static readonly ADD_ASSIGN=91;
	public static readonly SUB_ASSIGN=92;
	public static readonly MUL_ASSIGN=93;
	public static readonly DIV_ASSIGN=94;
	public static readonly AND_ASSIGN=95;
	public static readonly OR_ASSIGN=96;
	public static readonly XOR_ASSIGN=97;
	public static readonly MOD_ASSIGN=98;
	public static readonly LSHIFT_ASSIGN=99;
	public static readonly RSHIFT_ASSIGN=100;
	public static readonly URSHIFT_ASSIGN=101;
	public static readonly Identifier=102;
	public static readonly AT=103;
	public static readonly ELLIPSIS=104;
	public static readonly WS=105;
	public static readonly COMMENT=106;
	public static readonly LINE_COMMENT=107;
	public static readonly RULE_literal = 0;
	public static readonly RULE_type = 1;
	public static readonly RULE_primitiveType = 2;
	public static readonly RULE_numericType = 3;
	public static readonly RULE_integralType = 4;
	public static readonly RULE_floatingPointType = 5;
	public static readonly RULE_referenceType = 6;
	public static readonly RULE_classOrInterfaceType = 7;
	public static readonly RULE_classType = 8;
	public static readonly RULE_classType_lf_classOrInterfaceType = 9;
	public static readonly RULE_classType_lfno_classOrInterfaceType = 10;
	public static readonly RULE_interfaceType = 11;
	public static readonly RULE_interfaceType_lf_classOrInterfaceType = 12;
	public static readonly RULE_interfaceType_lfno_classOrInterfaceType = 13;
	public static readonly RULE_typeVariable = 14;
	public static readonly RULE_arrayType = 15;
	public static readonly RULE_dims = 16;
	public static readonly RULE_typeParameter = 17;
	public static readonly RULE_typeParameterModifier = 18;
	public static readonly RULE_typeBound = 19;
	public static readonly RULE_additionalBound = 20;
	public static readonly RULE_typeArguments = 21;
	public static readonly RULE_typeArgumentList = 22;
	public static readonly RULE_typeArgument = 23;
	public static readonly RULE_wildcard = 24;
	public static readonly RULE_wildcardBounds = 25;
	public static readonly RULE_packageName = 26;
	public static readonly RULE_typeName = 27;
	public static readonly RULE_packageOrTypeName = 28;
	public static readonly RULE_expressionName = 29;
	public static readonly RULE_methodName = 30;
	public static readonly RULE_ambiguousName = 31;
	public static readonly RULE_compilationUnit = 32;
	public static readonly RULE_packageDeclaration = 33;
	public static readonly RULE_packageModifier = 34;
	public static readonly RULE_importDeclaration = 35;
	public static readonly RULE_singleTypeImportDeclaration = 36;
	public static readonly RULE_typeImportOnDemandDeclaration = 37;
	public static readonly RULE_singleStaticImportDeclaration = 38;
	public static readonly RULE_staticImportOnDemandDeclaration = 39;
	public static readonly RULE_typeDeclaration = 40;
	public static readonly RULE_classDeclaration = 41;
	public static readonly RULE_normalClassDeclaration = 42;
	public static readonly RULE_classModifier = 43;
	public static readonly RULE_typeParameters = 44;
	public static readonly RULE_typeParameterList = 45;
	public static readonly RULE_superclass = 46;
	public static readonly RULE_superinterfaces = 47;
	public static readonly RULE_interfaceTypeList = 48;
	public static readonly RULE_classBody = 49;
	public static readonly RULE_classBodyDeclaration = 50;
	public static readonly RULE_classMemberDeclaration = 51;
	public static readonly RULE_fieldDeclaration = 52;
	public static readonly RULE_fieldModifier = 53;
	public static readonly RULE_variableDeclaratorList = 54;
	public static readonly RULE_variableDeclarator = 55;
	public static readonly RULE_variableDeclaratorId = 56;
	public static readonly RULE_variableInitializer = 57;
	public static readonly RULE_unannType = 58;
	public static readonly RULE_unannPrimitiveType = 59;
	public static readonly RULE_unannReferenceType = 60;
	public static readonly RULE_unannClassOrInterfaceType = 61;
	public static readonly RULE_unannClassType = 62;
	public static readonly RULE_unannClassType_lf_unannClassOrInterfaceType = 63;
	public static readonly RULE_unannClassType_lfno_unannClassOrInterfaceType = 64;
	public static readonly RULE_unannInterfaceType = 65;
	public static readonly RULE_unannInterfaceType_lf_unannClassOrInterfaceType = 66;
	public static readonly RULE_unannInterfaceType_lfno_unannClassOrInterfaceType = 67;
	public static readonly RULE_unannTypeVariable = 68;
	public static readonly RULE_unannArrayType = 69;
	public static readonly RULE_methodDeclaration = 70;
	public static readonly RULE_methodModifier = 71;
	public static readonly RULE_methodHeader = 72;
	public static readonly RULE_result = 73;
	public static readonly RULE_methodDeclarator = 74;
	public static readonly RULE_formalParameterList = 75;
	public static readonly RULE_formalParameters = 76;
	public static readonly RULE_formalParameter = 77;
	public static readonly RULE_variableModifier = 78;
	public static readonly RULE_lastFormalParameter = 79;
	public static readonly RULE_receiverParameter = 80;
	public static readonly RULE_throws_ = 81;
	public static readonly RULE_exceptionTypeList = 82;
	public static readonly RULE_exceptionType = 83;
	public static readonly RULE_methodBody = 84;
	public static readonly RULE_instanceInitializer = 85;
	public static readonly RULE_staticInitializer = 86;
	public static readonly RULE_constructorDeclaration = 87;
	public static readonly RULE_constructorModifier = 88;
	public static readonly RULE_constructorDeclarator = 89;
	public static readonly RULE_simpleTypeName = 90;
	public static readonly RULE_constructorBody = 91;
	public static readonly RULE_explicitConstructorInvocation = 92;
	public static readonly RULE_enumDeclaration = 93;
	public static readonly RULE_enumBody = 94;
	public static readonly RULE_enumConstantList = 95;
	public static readonly RULE_enumConstant = 96;
	public static readonly RULE_enumConstantModifier = 97;
	public static readonly RULE_enumBodyDeclarations = 98;
	public static readonly RULE_interfaceDeclaration = 99;
	public static readonly RULE_normalInterfaceDeclaration = 100;
	public static readonly RULE_interfaceModifier = 101;
	public static readonly RULE_extendsInterfaces = 102;
	public static readonly RULE_interfaceBody = 103;
	public static readonly RULE_interfaceMemberDeclaration = 104;
	public static readonly RULE_constantDeclaration = 105;
	public static readonly RULE_constantModifier = 106;
	public static readonly RULE_interfaceMethodDeclaration = 107;
	public static readonly RULE_interfaceMethodModifier = 108;
	public static readonly RULE_annotationTypeDeclaration = 109;
	public static readonly RULE_annotationTypeBody = 110;
	public static readonly RULE_annotationTypeMemberDeclaration = 111;
	public static readonly RULE_annotationTypeElementDeclaration = 112;
	public static readonly RULE_annotationTypeElementModifier = 113;
	public static readonly RULE_defaultValue = 114;
	public static readonly RULE_annotation = 115;
	public static readonly RULE_normalAnnotation = 116;
	public static readonly RULE_elementValuePairList = 117;
	public static readonly RULE_elementValuePair = 118;
	public static readonly RULE_elementValue = 119;
	public static readonly RULE_elementValueArrayInitializer = 120;
	public static readonly RULE_elementValueList = 121;
	public static readonly RULE_markerAnnotation = 122;
	public static readonly RULE_singleElementAnnotation = 123;
	public static readonly RULE_arrayInitializer = 124;
	public static readonly RULE_variableInitializerList = 125;
	public static readonly RULE_block = 126;
	public static readonly RULE_blockStatements = 127;
	public static readonly RULE_blockStatement = 128;
	public static readonly RULE_localVariableDeclarationStatement = 129;
	public static readonly RULE_localVariableDeclaration = 130;
	public static readonly RULE_statement = 131;
	public static readonly RULE_statementNoShortIf = 132;
	public static readonly RULE_statementWithoutTrailingSubstatement = 133;
	public static readonly RULE_emptyStatement = 134;
	public static readonly RULE_labeledStatement = 135;
	public static readonly RULE_labeledStatementNoShortIf = 136;
	public static readonly RULE_expressionStatement = 137;
	public static readonly RULE_statementExpression = 138;
	public static readonly RULE_ifThenStatement = 139;
	public static readonly RULE_ifThenElseStatement = 140;
	public static readonly RULE_ifThenElseStatementNoShortIf = 141;
	public static readonly RULE_assertStatement = 142;
	public static readonly RULE_switchStatement = 143;
	public static readonly RULE_switchBlock = 144;
	public static readonly RULE_switchBlockStatementGroup = 145;
	public static readonly RULE_switchLabels = 146;
	public static readonly RULE_switchLabel = 147;
	public static readonly RULE_enumConstantName = 148;
	public static readonly RULE_whileStatement = 149;
	public static readonly RULE_whileStatementNoShortIf = 150;
	public static readonly RULE_doStatement = 151;
	public static readonly RULE_forStatement = 152;
	public static readonly RULE_forStatementNoShortIf = 153;
	public static readonly RULE_basicForStatement = 154;
	public static readonly RULE_basicForStatementNoShortIf = 155;
	public static readonly RULE_forInit = 156;
	public static readonly RULE_forUpdate = 157;
	public static readonly RULE_statementExpressionList = 158;
	public static readonly RULE_enhancedForStatement = 159;
	public static readonly RULE_enhancedForStatementNoShortIf = 160;
	public static readonly RULE_breakStatement = 161;
	public static readonly RULE_continueStatement = 162;
	public static readonly RULE_returnStatement = 163;
	public static readonly RULE_throwStatement = 164;
	public static readonly RULE_synchronizedStatement = 165;
	public static readonly RULE_tryStatement = 166;
	public static readonly RULE_catches = 167;
	public static readonly RULE_catchClause = 168;
	public static readonly RULE_catchFormalParameter = 169;
	public static readonly RULE_catchType = 170;
	public static readonly RULE_finally_ = 171;
	public static readonly RULE_tryWithResourcesStatement = 172;
	public static readonly RULE_resourceSpecification = 173;
	public static readonly RULE_resourceList = 174;
	public static readonly RULE_resource = 175;
	public static readonly RULE_primary = 176;
	public static readonly RULE_primaryNoNewArray = 177;
	public static readonly RULE_primaryNoNewArray_lf_arrayAccess = 178;
	public static readonly RULE_primaryNoNewArray_lfno_arrayAccess = 179;
	public static readonly RULE_primaryNoNewArray_lf_primary = 180;
	public static readonly RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = 181;
	public static readonly RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = 182;
	public static readonly RULE_primaryNoNewArray_lfno_primary = 183;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = 184;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = 185;
	public static readonly RULE_classInstanceCreationExpression = 186;
	public static readonly RULE_classInstanceCreationExpression_lf_primary = 187;
	public static readonly RULE_classInstanceCreationExpression_lfno_primary = 188;
	public static readonly RULE_typeArgumentsOrDiamond = 189;
	public static readonly RULE_fieldAccess = 190;
	public static readonly RULE_fieldAccess_lf_primary = 191;
	public static readonly RULE_fieldAccess_lfno_primary = 192;
	public static readonly RULE_arrayAccess = 193;
	public static readonly RULE_arrayAccess_lf_primary = 194;
	public static readonly RULE_arrayAccess_lfno_primary = 195;
	public static readonly RULE_methodInvocation = 196;
	public static readonly RULE_methodInvocation_lf_primary = 197;
	public static readonly RULE_methodInvocation_lfno_primary = 198;
	public static readonly RULE_argumentList = 199;
	public static readonly RULE_methodReference = 200;
	public static readonly RULE_methodReference_lf_primary = 201;
	public static readonly RULE_methodReference_lfno_primary = 202;
	public static readonly RULE_arrayCreationExpression = 203;
	public static readonly RULE_dimExprs = 204;
	public static readonly RULE_dimExpr = 205;
	public static readonly RULE_constantExpression = 206;
	public static readonly RULE_expression = 207;
	public static readonly RULE_lambdaExpression = 208;
	public static readonly RULE_lambdaParameters = 209;
	public static readonly RULE_inferredFormalParameterList = 210;
	public static readonly RULE_lambdaBody = 211;
	public static readonly RULE_assignmentExpression = 212;
	public static readonly RULE_assignment = 213;
	public static readonly RULE_leftHandSide = 214;
	public static readonly RULE_assignmentOperator = 215;
	public static readonly RULE_conditionalExpression = 216;
	public static readonly RULE_conditionalOrExpression = 217;
	public static readonly RULE_conditionalAndExpression = 218;
	public static readonly RULE_inclusiveOrExpression = 219;
	public static readonly RULE_exclusiveOrExpression = 220;
	public static readonly RULE_andExpression = 221;
	public static readonly RULE_equalityExpression = 222;
	public static readonly RULE_relationalExpression = 223;
	public static readonly RULE_shiftExpression = 224;
	public static readonly RULE_additiveExpression = 225;
	public static readonly RULE_multiplicativeExpression = 226;
	public static readonly RULE_unaryExpression = 227;
	public static readonly RULE_preIncrementExpression = 228;
	public static readonly RULE_preDecrementExpression = 229;
	public static readonly RULE_unaryExpressionNotPlusMinus = 230;
	public static readonly RULE_postfixExpression = 231;
	public static readonly RULE_postIncrementExpression = 232;
	public static readonly RULE_postIncrementExpression_lf_postfixExpression = 233;
	public static readonly RULE_postDecrementExpression = 234;
	public static readonly RULE_postDecrementExpression_lf_postfixExpression = 235;
	public static readonly RULE_castExpression = 236;
	public static readonly ruleNames: string[] = [
		"literal", "type", "primitiveType", "numericType", "integralType", "floatingPointType", 
		"referenceType", "classOrInterfaceType", "classType", "classType_lf_classOrInterfaceType", 
		"classType_lfno_classOrInterfaceType", "interfaceType", "interfaceType_lf_classOrInterfaceType", 
		"interfaceType_lfno_classOrInterfaceType", "typeVariable", "arrayType", 
		"dims", "typeParameter", "typeParameterModifier", "typeBound", "additionalBound", 
		"typeArguments", "typeArgumentList", "typeArgument", "wildcard", "wildcardBounds", 
		"packageName", "typeName", "packageOrTypeName", "expressionName", "methodName", 
		"ambiguousName", "compilationUnit", "packageDeclaration", "packageModifier", 
		"importDeclaration", "singleTypeImportDeclaration", "typeImportOnDemandDeclaration", 
		"singleStaticImportDeclaration", "staticImportOnDemandDeclaration", "typeDeclaration", 
		"classDeclaration", "normalClassDeclaration", "classModifier", "typeParameters", 
		"typeParameterList", "superclass", "superinterfaces", "interfaceTypeList", 
		"classBody", "classBodyDeclaration", "classMemberDeclaration", "fieldDeclaration", 
		"fieldModifier", "variableDeclaratorList", "variableDeclarator", "variableDeclaratorId", 
		"variableInitializer", "unannType", "unannPrimitiveType", "unannReferenceType", 
		"unannClassOrInterfaceType", "unannClassType", "unannClassType_lf_unannClassOrInterfaceType", 
		"unannClassType_lfno_unannClassOrInterfaceType", "unannInterfaceType", 
		"unannInterfaceType_lf_unannClassOrInterfaceType", "unannInterfaceType_lfno_unannClassOrInterfaceType", 
		"unannTypeVariable", "unannArrayType", "methodDeclaration", "methodModifier", 
		"methodHeader", "result", "methodDeclarator", "formalParameterList", "formalParameters", 
		"formalParameter", "variableModifier", "lastFormalParameter", "receiverParameter", 
		"throws_", "exceptionTypeList", "exceptionType", "methodBody", "instanceInitializer", 
		"staticInitializer", "constructorDeclaration", "constructorModifier", 
		"constructorDeclarator", "simpleTypeName", "constructorBody", "explicitConstructorInvocation", 
		"enumDeclaration", "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier", 
		"enumBodyDeclarations", "interfaceDeclaration", "normalInterfaceDeclaration", 
		"interfaceModifier", "extendsInterfaces", "interfaceBody", "interfaceMemberDeclaration", 
		"constantDeclaration", "constantModifier", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeMemberDeclaration", "annotationTypeElementDeclaration", 
		"annotationTypeElementModifier", "defaultValue", "annotation", "normalAnnotation", 
		"elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"elementValueList", "markerAnnotation", "singleElementAnnotation", "arrayInitializer", 
		"variableInitializerList", "block", "blockStatements", "blockStatement", 
		"localVariableDeclarationStatement", "localVariableDeclaration", "statement", 
		"statementNoShortIf", "statementWithoutTrailingSubstatement", "emptyStatement", 
		"labeledStatement", "labeledStatementNoShortIf", "expressionStatement", 
		"statementExpression", "ifThenStatement", "ifThenElseStatement", "ifThenElseStatementNoShortIf", 
		"assertStatement", "switchStatement", "switchBlock", "switchBlockStatementGroup", 
		"switchLabels", "switchLabel", "enumConstantName", "whileStatement", "whileStatementNoShortIf", 
		"doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement", 
		"basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList", 
		"enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement", 
		"continueStatement", "returnStatement", "throwStatement", "synchronizedStatement", 
		"tryStatement", "catches", "catchClause", "catchFormalParameter", "catchType", 
		"finally_", "tryWithResourcesStatement", "resourceSpecification", "resourceList", 
		"resource", "primary", "primaryNoNewArray", "primaryNoNewArray_lf_arrayAccess", 
		"primaryNoNewArray_lfno_arrayAccess", "primaryNoNewArray_lf_primary", 
		"primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary", "primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary", 
		"primaryNoNewArray_lfno_primary", "primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary", 
		"primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary", "classInstanceCreationExpression", 
		"classInstanceCreationExpression_lf_primary", "classInstanceCreationExpression_lfno_primary", 
		"typeArgumentsOrDiamond", "fieldAccess", "fieldAccess_lf_primary", "fieldAccess_lfno_primary", 
		"arrayAccess", "arrayAccess_lf_primary", "arrayAccess_lfno_primary", "methodInvocation", 
		"methodInvocation_lf_primary", "methodInvocation_lfno_primary", "argumentList", 
		"methodReference", "methodReference_lf_primary", "methodReference_lfno_primary", 
		"arrayCreationExpression", "dimExprs", "dimExpr", "constantExpression", 
		"expression", "lambdaExpression", "lambdaParameters", "inferredFormalParameterList", 
		"lambdaBody", "assignmentExpression", "assignment", "leftHandSide", "assignmentOperator", 
		"conditionalExpression", "conditionalOrExpression", "conditionalAndExpression", 
		"inclusiveOrExpression", "exclusiveOrExpression", "andExpression", "equalityExpression", 
		"relationalExpression", "shiftExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "preIncrementExpression", "preDecrementExpression", 
		"unaryExpressionNotPlusMinus", "postfixExpression", "postIncrementExpression", 
		"postIncrementExpression_lf_postfixExpression", "postDecrementExpression", 
		"postDecrementExpression_lf_postfixExpression", "castExpression"
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
		undefined, undefined, undefined, undefined, "'null'", "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", 
		"'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", 
		"'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'->'", 
		"'::'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", 
		"'<<='", "'>>='", "'>>>='", undefined, "'@'", "'...'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
		"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
		"ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", 
		"IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", 
		"SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", 
		"TRY", "VOID", "VOLATILE", "WHILE", "IntegerLiteral", "FloatingPointLiteral", 
		"BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
		"DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", 
		"LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", 
		"DIV", "BITAND", "BITOR", "CARET", "MOD", "ARROW", "COLONCOLON", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "Identifier", 
		"AT", "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Java8Parser._LITERAL_NAMES, Java8Parser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return Java8Parser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Java8.g4"; }

	@Override
	public get ruleNames(): string[] { return Java8Parser.ruleNames; }

	@Override
	public get serializedATN(): string { return Java8Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Java8Parser._ATN, this);
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Java8Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			_la = this._input.LA(1);
			if ( !(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Java8Parser.IntegerLiteral - 51)) | (1 << (Java8Parser.FloatingPointLiteral - 51)) | (1 << (Java8Parser.BooleanLiteral - 51)) | (1 << (Java8Parser.CharacterLiteral - 51)) | (1 << (Java8Parser.StringLiteral - 51)) | (1 << (Java8Parser.NullLiteral - 51)))) !== 0)) ) {
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Java8Parser.RULE_type);
		try {
			this.state = 478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 476;
				this.primitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.referenceType();
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Java8Parser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 494;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 480;
					this.annotation();
					}
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 486;
				this.numericType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 487;
					this.annotation();
					}
					}
					this.state = 492;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 493;
				this.match(Java8Parser.BOOLEAN);
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
	public numericType(): NumericTypeContext {
		let _localctx: NumericTypeContext = new NumericTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Java8Parser.RULE_numericType);
		try {
			this.state = 498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this.integralType();
				}
				break;
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 497;
				this.floatingPointType();
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
	public integralType(): IntegralTypeContext {
		let _localctx: IntegralTypeContext = new IntegralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Java8Parser.RULE_integralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la===Java8Parser.SHORT) ) {
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
	public floatingPointType(): FloatingPointTypeContext {
		let _localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Java8Parser.RULE_floatingPointType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			_la = this._input.LA(1);
			if ( !(_la===Java8Parser.DOUBLE || _la===Java8Parser.FLOAT) ) {
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
	public referenceType(): ReferenceTypeContext {
		let _localctx: ReferenceTypeContext = new ReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Java8Parser.RULE_referenceType);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,5,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 504;
				this.classOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.typeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 506;
				this.arrayType();
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
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Java8Parser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
			case 1:
				{
				this.state = 509;
				this.classType_lfno_classOrInterfaceType();
				}
				break;

			case 2:
				{
				this.state = 510;
				this.interfaceType_lfno_classOrInterfaceType();
				}
				break;
			}
			this.state = 517;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,8,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 515;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,7,this._ctx) ) {
					case 1:
						{
						this.state = 513;
						this.classType_lf_classOrInterfaceType();
						}
						break;

					case 2:
						{
						this.state = 514;
						this.interfaceType_lf_classOrInterfaceType();
						}
						break;
					}
					} 
				}
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,8,this._ctx);
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
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Java8Parser.RULE_classType);
		let _la: number;
		try {
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 520;
					this.annotation();
					}
					}
					this.state = 525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 526;
				this.match(Java8Parser.Identifier);
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 527;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 530;
				this.classOrInterfaceType();
				this.state = 531;
				this.match(Java8Parser.DOT);
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 532;
					this.annotation();
					}
					}
					this.state = 537;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 538;
				this.match(Java8Parser.Identifier);
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 539;
					this.typeArguments();
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
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		let _localctx: ClassType_lf_classOrInterfaceTypeContext = new ClassType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Java8Parser.RULE_classType_lf_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.match(Java8Parser.DOT);
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 545;
				this.annotation();
				}
				}
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 551;
			this.match(Java8Parser.Identifier);
			this.state = 553;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
			case 1:
				{
				this.state = 552;
				this.typeArguments();
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
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		let _localctx: ClassType_lfno_classOrInterfaceTypeContext = new ClassType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Java8Parser.RULE_classType_lfno_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 555;
				this.annotation();
				}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 561;
			this.match(Java8Parser.Identifier);
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.typeArguments();
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
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Java8Parser.RULE_interfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.classType();
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
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lf_classOrInterfaceTypeContext = new InterfaceType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Java8Parser.RULE_interfaceType_lf_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.classType_lf_classOrInterfaceType();
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
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lfno_classOrInterfaceTypeContext = new InterfaceType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.classType_lfno_classOrInterfaceType();
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
	public typeVariable(): TypeVariableContext {
		let _localctx: TypeVariableContext = new TypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Java8Parser.RULE_typeVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 571;
				this.annotation();
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 577;
			this.match(Java8Parser.Identifier);
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
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Java8Parser.RULE_arrayType);
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 579;
				this.primitiveType();
				this.state = 580;
				this.dims();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 582;
				this.classOrInterfaceType();
				this.state = 583;
				this.dims();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 585;
				this.typeVariable();
				this.state = 586;
				this.dims();
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
	public dims(): DimsContext {
		let _localctx: DimsContext = new DimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Java8Parser.RULE_dims);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 590;
				this.annotation();
				}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 596;
			this.match(Java8Parser.LBRACK);
			this.state = 597;
			this.match(Java8Parser.RBRACK);
			this.state = 608;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===Java8Parser.AT) {
						{
						{
						this.state = 598;
						this.annotation();
						}
						}
						this.state = 603;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 604;
					this.match(Java8Parser.LBRACK);
					this.state = 605;
					this.match(Java8Parser.RBRACK);
					}
					} 
				}
				this.state = 610;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
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
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Java8Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 611;
				this.typeParameterModifier();
				}
				}
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 617;
			this.match(Java8Parser.Identifier);
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.EXTENDS) {
				{
				this.state = 618;
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
	public typeParameterModifier(): TypeParameterModifierContext {
		let _localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Java8Parser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.annotation();
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
		this.enterRule(_localctx, 38, Java8Parser.RULE_typeBound);
		let _la: number;
		try {
			this.state = 633;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 623;
				this.match(Java8Parser.EXTENDS);
				this.state = 624;
				this.typeVariable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 625;
				this.match(Java8Parser.EXTENDS);
				this.state = 626;
				this.classOrInterfaceType();
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.BITAND) {
					{
					{
					this.state = 627;
					this.additionalBound();
					}
					}
					this.state = 632;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public additionalBound(): AdditionalBoundContext {
		let _localctx: AdditionalBoundContext = new AdditionalBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Java8Parser.RULE_additionalBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.match(Java8Parser.BITAND);
			this.state = 636;
			this.interfaceType();
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
		this.enterRule(_localctx, 42, Java8Parser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.match(Java8Parser.LT);
			this.state = 639;
			this.typeArgumentList();
			this.state = 640;
			this.match(Java8Parser.GT);
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
	public typeArgumentList(): TypeArgumentListContext {
		let _localctx: TypeArgumentListContext = new TypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Java8Parser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.typeArgument();
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 643;
				this.match(Java8Parser.COMMA);
				this.state = 644;
				this.typeArgument();
				}
				}
				this.state = 649;
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
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Java8Parser.RULE_typeArgument);
		try {
			this.state = 652;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 650;
				this.referenceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 651;
				this.wildcard();
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
	public wildcard(): WildcardContext {
		let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Java8Parser.RULE_wildcard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 654;
				this.annotation();
				}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 660;
			this.match(Java8Parser.QUESTION);
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.EXTENDS || _la===Java8Parser.SUPER) {
				{
				this.state = 661;
				this.wildcardBounds();
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
	public wildcardBounds(): WildcardBoundsContext {
		let _localctx: WildcardBoundsContext = new WildcardBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Java8Parser.RULE_wildcardBounds);
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.EXTENDS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 664;
				this.match(Java8Parser.EXTENDS);
				this.state = 665;
				this.referenceType();
				}
				break;
			case Java8Parser.SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 666;
				this.match(Java8Parser.SUPER);
				this.state = 667;
				this.referenceType();
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

	public packageName(): PackageNameContext;
	public packageName(_p: number): PackageNameContext;
	@RuleVersion(0)
	public packageName(_p?: number): PackageNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageNameContext = new PackageNameContext(this._ctx, _parentState);
		let _prevctx: PackageNameContext = _localctx;
		let _startState: number = 52;
		this.enterRecursionRule(_localctx, 52, Java8Parser.RULE_packageName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 671;
			this.match(Java8Parser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 678;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_packageName);
					this.state = 673;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 674;
					this.match(Java8Parser.DOT);
					this.state = 675;
					this.match(Java8Parser.Identifier);
					}
					} 
				}
				this.state = 680;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
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
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Java8Parser.RULE_typeName);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 681;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 682;
				this.packageOrTypeName(0);
				this.state = 683;
				this.match(Java8Parser.DOT);
				this.state = 684;
				this.match(Java8Parser.Identifier);
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

	public packageOrTypeName(): PackageOrTypeNameContext;
	public packageOrTypeName(_p: number): PackageOrTypeNameContext;
	@RuleVersion(0)
	public packageOrTypeName(_p?: number): PackageOrTypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this._ctx, _parentState);
		let _prevctx: PackageOrTypeNameContext = _localctx;
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, Java8Parser.RULE_packageOrTypeName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 689;
			this.match(Java8Parser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 696;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,34,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageOrTypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_packageOrTypeName);
					this.state = 691;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 692;
					this.match(Java8Parser.DOT);
					this.state = 693;
					this.match(Java8Parser.Identifier);
					}
					} 
				}
				this.state = 698;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,34,this._ctx);
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
	public expressionName(): ExpressionNameContext {
		let _localctx: ExpressionNameContext = new ExpressionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Java8Parser.RULE_expressionName);
		try {
			this.state = 704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 699;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 700;
				this.ambiguousName(0);
				this.state = 701;
				this.match(Java8Parser.DOT);
				this.state = 702;
				this.match(Java8Parser.Identifier);
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
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Java8Parser.RULE_methodName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(Java8Parser.Identifier);
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

	public ambiguousName(): AmbiguousNameContext;
	public ambiguousName(_p: number): AmbiguousNameContext;
	@RuleVersion(0)
	public ambiguousName(_p?: number): AmbiguousNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AmbiguousNameContext = new AmbiguousNameContext(this._ctx, _parentState);
		let _prevctx: AmbiguousNameContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, Java8Parser.RULE_ambiguousName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 709;
			this.match(Java8Parser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 716;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,36,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AmbiguousNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_ambiguousName);
					this.state = 711;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 712;
					this.match(Java8Parser.DOT);
					this.state = 713;
					this.match(Java8Parser.Identifier);
					}
					} 
				}
				this.state = 718;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,36,this._ctx);
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
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Java8Parser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,37,this._ctx) ) {
			case 1:
				{
				this.state = 719;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.IMPORT) {
				{
				{
				this.state = 722;
				this.importDeclaration();
				}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 728;
				this.typeDeclaration();
				}
				}
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 734;
			this.match(Java8Parser.EOF);
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
		this.enterRule(_localctx, 66, Java8Parser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 736;
				this.packageModifier();
				}
				}
				this.state = 741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 742;
			this.match(Java8Parser.PACKAGE);
			this.state = 743;
			this.match(Java8Parser.Identifier);
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.DOT) {
				{
				{
				this.state = 744;
				this.match(Java8Parser.DOT);
				this.state = 745;
				this.match(Java8Parser.Identifier);
				}
				}
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 751;
			this.match(Java8Parser.SEMI);
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
	public packageModifier(): PackageModifierContext {
		let _localctx: PackageModifierContext = new PackageModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Java8Parser.RULE_packageModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.annotation();
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
		this.enterRule(_localctx, 70, Java8Parser.RULE_importDeclaration);
		try {
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,42,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.singleTypeImportDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.typeImportOnDemandDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 757;
				this.singleStaticImportDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 758;
				this.staticImportOnDemandDeclaration();
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
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		let _localctx: SingleTypeImportDeclarationContext = new SingleTypeImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Java8Parser.RULE_singleTypeImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(Java8Parser.IMPORT);
			this.state = 762;
			this.typeName();
			this.state = 763;
			this.match(Java8Parser.SEMI);
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
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		let _localctx: TypeImportOnDemandDeclarationContext = new TypeImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Java8Parser.RULE_typeImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(Java8Parser.IMPORT);
			this.state = 766;
			this.packageOrTypeName(0);
			this.state = 767;
			this.match(Java8Parser.DOT);
			this.state = 768;
			this.match(Java8Parser.MUL);
			this.state = 769;
			this.match(Java8Parser.SEMI);
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
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		let _localctx: SingleStaticImportDeclarationContext = new SingleStaticImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Java8Parser.RULE_singleStaticImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(Java8Parser.IMPORT);
			this.state = 772;
			this.match(Java8Parser.STATIC);
			this.state = 773;
			this.typeName();
			this.state = 774;
			this.match(Java8Parser.DOT);
			this.state = 775;
			this.match(Java8Parser.Identifier);
			this.state = 776;
			this.match(Java8Parser.SEMI);
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
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		let _localctx: StaticImportOnDemandDeclarationContext = new StaticImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Java8Parser.RULE_staticImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(Java8Parser.IMPORT);
			this.state = 779;
			this.match(Java8Parser.STATIC);
			this.state = 780;
			this.typeName();
			this.state = 781;
			this.match(Java8Parser.DOT);
			this.state = 782;
			this.match(Java8Parser.MUL);
			this.state = 783;
			this.match(Java8Parser.SEMI);
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
		this.enterRule(_localctx, 80, Java8Parser.RULE_typeDeclaration);
		try {
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 785;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				this.interfaceDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 787;
				this.match(Java8Parser.SEMI);
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Java8Parser.RULE_classDeclaration);
		try {
			this.state = 792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 790;
				this.normalClassDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 791;
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
	public normalClassDeclaration(): NormalClassDeclarationContext {
		let _localctx: NormalClassDeclarationContext = new NormalClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Java8Parser.RULE_normalClassDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.ABSTRACT || _la===Java8Parser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 794;
				this.classModifier();
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 800;
			this.match(Java8Parser.CLASS);
			this.state = 801;
			this.match(Java8Parser.Identifier);
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 802;
				this.typeParameters();
				}
			}

			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.EXTENDS) {
				{
				this.state = 805;
				this.superclass();
				}
			}

			this.state = 809;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.IMPLEMENTS) {
				{
				this.state = 808;
				this.superinterfaces();
				}
			}

			this.state = 811;
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
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Java8Parser.RULE_classModifier);
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 813;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 814;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 815;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 816;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 817;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 818;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 819;
				this.match(Java8Parser.FINAL);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 820;
				this.match(Java8Parser.STRICTFP);
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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Java8Parser.RULE_typeParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.match(Java8Parser.LT);
			this.state = 824;
			this.typeParameterList();
			this.state = 825;
			this.match(Java8Parser.GT);
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
	public typeParameterList(): TypeParameterListContext {
		let _localctx: TypeParameterListContext = new TypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Java8Parser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.typeParameter();
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 828;
				this.match(Java8Parser.COMMA);
				this.state = 829;
				this.typeParameter();
				}
				}
				this.state = 834;
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
	public superclass(): SuperclassContext {
		let _localctx: SuperclassContext = new SuperclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Java8Parser.RULE_superclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.match(Java8Parser.EXTENDS);
			this.state = 836;
			this.classType();
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
	public superinterfaces(): SuperinterfacesContext {
		let _localctx: SuperinterfacesContext = new SuperinterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Java8Parser.RULE_superinterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.match(Java8Parser.IMPLEMENTS);
			this.state = 839;
			this.interfaceTypeList();
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
	public interfaceTypeList(): InterfaceTypeListContext {
		let _localctx: InterfaceTypeListContext = new InterfaceTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Java8Parser.RULE_interfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this.interfaceType();
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 842;
				this.match(Java8Parser.COMMA);
				this.state = 843;
				this.interfaceType();
				}
				}
				this.state = 848;
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
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Java8Parser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.match(Java8Parser.LBRACE);
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || _la===Java8Parser.LT || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				{
				this.state = 850;
				this.classBodyDeclaration();
				}
				}
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 856;
			this.match(Java8Parser.RBRACE);
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
		this.enterRule(_localctx, 100, Java8Parser.RULE_classBodyDeclaration);
		try {
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 858;
				this.classMemberDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 859;
				this.instanceInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 860;
				this.staticInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 861;
				this.constructorDeclaration();
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
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let _localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Java8Parser.RULE_classMemberDeclaration);
		try {
			this.state = 869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,54,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 864;
				this.fieldDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 865;
				this.methodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 866;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 867;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 868;
				this.match(Java8Parser.SEMI);
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
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Java8Parser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (Java8Parser.FINAL - 18)) | (1 << (Java8Parser.PRIVATE - 18)) | (1 << (Java8Parser.PROTECTED - 18)) | (1 << (Java8Parser.PUBLIC - 18)) | (1 << (Java8Parser.STATIC - 18)) | (1 << (Java8Parser.TRANSIENT - 18)) | (1 << (Java8Parser.VOLATILE - 18)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 871;
				this.fieldModifier();
				}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 877;
			this.unannType();
			this.state = 878;
			this.variableDeclaratorList();
			this.state = 879;
			this.match(Java8Parser.SEMI);
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
	public fieldModifier(): FieldModifierContext {
		let _localctx: FieldModifierContext = new FieldModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Java8Parser.RULE_fieldModifier);
		try {
			this.state = 889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 881;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 882;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 883;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 884;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 885;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 886;
				this.match(Java8Parser.FINAL);
				}
				break;
			case Java8Parser.TRANSIENT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 887;
				this.match(Java8Parser.TRANSIENT);
				}
				break;
			case Java8Parser.VOLATILE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 888;
				this.match(Java8Parser.VOLATILE);
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
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let _localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Java8Parser.RULE_variableDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this.variableDeclarator();
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 892;
				this.match(Java8Parser.COMMA);
				this.state = 893;
				this.variableDeclarator();
				}
				}
				this.state = 898;
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
		this.enterRule(_localctx, 110, Java8Parser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.variableDeclaratorId();
			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.ASSIGN) {
				{
				this.state = 900;
				this.match(Java8Parser.ASSIGN);
				this.state = 901;
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
		this.enterRule(_localctx, 112, Java8Parser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			this.match(Java8Parser.Identifier);
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LBRACK || _la===Java8Parser.AT) {
				{
				this.state = 905;
				this.dims();
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
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Java8Parser.RULE_variableInitializer);
		try {
			this.state = 910;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.BANG:
			case Java8Parser.TILDE:
			case Java8Parser.INC:
			case Java8Parser.DEC:
			case Java8Parser.ADD:
			case Java8Parser.SUB:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.expression();
				}
				break;
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 909;
				this.arrayInitializer();
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
	public unannType(): UnannTypeContext {
		let _localctx: UnannTypeContext = new UnannTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Java8Parser.RULE_unannType);
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,61,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 912;
				this.unannPrimitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 913;
				this.unannReferenceType();
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
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		let _localctx: UnannPrimitiveTypeContext = new UnannPrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Java8Parser.RULE_unannPrimitiveType);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.numericType();
				}
				break;
			case Java8Parser.BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.match(Java8Parser.BOOLEAN);
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
	public unannReferenceType(): UnannReferenceTypeContext {
		let _localctx: UnannReferenceTypeContext = new UnannReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Java8Parser.RULE_unannReferenceType);
		try {
			this.state = 923;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 920;
				this.unannClassOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
				this.unannTypeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 922;
				this.unannArrayType();
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
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		let _localctx: UnannClassOrInterfaceTypeContext = new UnannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Java8Parser.RULE_unannClassOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
			case 1:
				{
				this.state = 925;
				this.unannClassType_lfno_unannClassOrInterfaceType();
				}
				break;

			case 2:
				{
				this.state = 926;
				this.unannInterfaceType_lfno_unannClassOrInterfaceType();
				}
				break;
			}
			this.state = 933;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 931;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
					case 1:
						{
						this.state = 929;
						this.unannClassType_lf_unannClassOrInterfaceType();
						}
						break;

					case 2:
						{
						this.state = 930;
						this.unannInterfaceType_lf_unannClassOrInterfaceType();
						}
						break;
					}
					} 
				}
				this.state = 935;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,66,this._ctx);
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
	public unannClassType(): UnannClassTypeContext {
		let _localctx: UnannClassTypeContext = new UnannClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Java8Parser.RULE_unannClassType);
		let _la: number;
		try {
			this.state = 952;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,70,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 936;
				this.match(Java8Parser.Identifier);
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 937;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 940;
				this.unannClassOrInterfaceType();
				this.state = 941;
				this.match(Java8Parser.DOT);
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 942;
					this.annotation();
					}
					}
					this.state = 947;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 948;
				this.match(Java8Parser.Identifier);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 949;
					this.typeArguments();
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
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lf_unannClassOrInterfaceTypeContext = new UnannClassType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(Java8Parser.DOT);
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 955;
				this.annotation();
				}
				}
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 961;
			this.match(Java8Parser.Identifier);
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 962;
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
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext = new UnannClassType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.match(Java8Parser.Identifier);
			this.state = 967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 966;
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
	public unannInterfaceType(): UnannInterfaceTypeContext {
		let _localctx: UnannInterfaceTypeContext = new UnannInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Java8Parser.RULE_unannInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.unannClassType();
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
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.unannClassType_lf_unannClassOrInterfaceType();
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
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.unannClassType_lfno_unannClassOrInterfaceType();
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
	public unannTypeVariable(): UnannTypeVariableContext {
		let _localctx: UnannTypeVariableContext = new UnannTypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Java8Parser.RULE_unannTypeVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			this.match(Java8Parser.Identifier);
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
	public unannArrayType(): UnannArrayTypeContext {
		let _localctx: UnannArrayTypeContext = new UnannArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Java8Parser.RULE_unannArrayType);
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 977;
				this.unannPrimitiveType();
				this.state = 978;
				this.dims();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 980;
				this.unannClassOrInterfaceType();
				this.state = 981;
				this.dims();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 983;
				this.unannTypeVariable();
				this.state = 984;
				this.dims();
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
		this.enterRule(_localctx, 140, Java8Parser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 988;
				this.methodModifier();
				}
				}
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 994;
			this.methodHeader();
			this.state = 995;
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
	public methodModifier(): MethodModifierContext {
		let _localctx: MethodModifierContext = new MethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Java8Parser.RULE_methodModifier);
		try {
			this.state = 1007;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 997;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 998;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 999;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1000;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1001;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1002;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1003;
				this.match(Java8Parser.FINAL);
				}
				break;
			case Java8Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1004;
				this.match(Java8Parser.SYNCHRONIZED);
				}
				break;
			case Java8Parser.NATIVE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1005;
				this.match(Java8Parser.NATIVE);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1006;
				this.match(Java8Parser.STRICTFP);
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
	public methodHeader(): MethodHeaderContext {
		let _localctx: MethodHeaderContext = new MethodHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Java8Parser.RULE_methodHeader);
		let _la: number;
		try {
			this.state = 1026;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
			case Java8Parser.VOID:
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.result();
				this.state = 1010;
				this.methodDeclarator();
				this.state = 1012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.THROWS) {
					{
					this.state = 1011;
					this.throws_();
					}
				}

				}
				break;
			case Java8Parser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1014;
				this.typeParameters();
				this.state = 1018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 1015;
					this.annotation();
					}
					}
					this.state = 1020;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1021;
				this.result();
				this.state = 1022;
				this.methodDeclarator();
				this.state = 1024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.THROWS) {
					{
					this.state = 1023;
					this.throws_();
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
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Java8Parser.RULE_result);
		try {
			this.state = 1030;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1028;
				this.unannType();
				}
				break;
			case Java8Parser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1029;
				this.match(Java8Parser.VOID);
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
	public methodDeclarator(): MethodDeclaratorContext {
		let _localctx: MethodDeclaratorContext = new MethodDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Java8Parser.RULE_methodDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.match(Java8Parser.Identifier);
			this.state = 1033;
			this.match(Java8Parser.LPAREN);
			this.state = 1035;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la===Java8Parser.SHORT || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1034;
				this.formalParameterList();
				}
			}

			this.state = 1037;
			this.match(Java8Parser.RPAREN);
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LBRACK || _la===Java8Parser.AT) {
				{
				this.state = 1038;
				this.dims();
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
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Java8Parser.RULE_formalParameterList);
		try {
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1041;
				this.formalParameters();
				this.state = 1042;
				this.match(Java8Parser.COMMA);
				this.state = 1043;
				this.lastFormalParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1045;
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
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Java8Parser.RULE_formalParameters);
		try {
			let _alt: number;
			this.state = 1064;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,87,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.formalParameter();
				this.state = 1053;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,85,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1049;
						this.match(Java8Parser.COMMA);
						this.state = 1050;
						this.formalParameter();
						}
						} 
					}
					this.state = 1055;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,85,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1056;
				this.receiverParameter();
				this.state = 1061;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1057;
						this.match(Java8Parser.COMMA);
						this.state = 1058;
						this.formalParameter();
						}
						} 
					}
					this.state = 1063;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
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
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Java8Parser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.FINAL || _la===Java8Parser.AT) {
				{
				{
				this.state = 1066;
				this.variableModifier();
				}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1072;
			this.unannType();
			this.state = 1073;
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
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Java8Parser.RULE_variableModifier);
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1075;
				this.annotation();
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1076;
				this.match(Java8Parser.FINAL);
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
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Java8Parser.RULE_lastFormalParameter);
		let _la: number;
		try {
			this.state = 1096;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,92,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.FINAL || _la===Java8Parser.AT) {
					{
					{
					this.state = 1079;
					this.variableModifier();
					}
					}
					this.state = 1084;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1085;
				this.unannType();
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 1086;
					this.annotation();
					}
					}
					this.state = 1091;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1092;
				this.match(Java8Parser.ELLIPSIS);
				this.state = 1093;
				this.variableDeclaratorId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1095;
				this.formalParameter();
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
	public receiverParameter(): ReceiverParameterContext {
		let _localctx: ReceiverParameterContext = new ReceiverParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Java8Parser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 1098;
				this.annotation();
				}
				}
				this.state = 1103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1104;
			this.unannType();
			this.state = 1107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.Identifier) {
				{
				this.state = 1105;
				this.match(Java8Parser.Identifier);
				this.state = 1106;
				this.match(Java8Parser.DOT);
				}
			}

			this.state = 1109;
			this.match(Java8Parser.THIS);
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
	public throws_(): Throws_Context {
		let _localctx: Throws_Context = new Throws_Context(this._ctx, this.state);
		this.enterRule(_localctx, 162, Java8Parser.RULE_throws_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1111;
			this.match(Java8Parser.THROWS);
			this.state = 1112;
			this.exceptionTypeList();
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
	public exceptionTypeList(): ExceptionTypeListContext {
		let _localctx: ExceptionTypeListContext = new ExceptionTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Java8Parser.RULE_exceptionTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this.exceptionType();
			this.state = 1119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 1115;
				this.match(Java8Parser.COMMA);
				this.state = 1116;
				this.exceptionType();
				}
				}
				this.state = 1121;
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
	public exceptionType(): ExceptionTypeContext {
		let _localctx: ExceptionTypeContext = new ExceptionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Java8Parser.RULE_exceptionType);
		try {
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1122;
				this.classType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1123;
				this.typeVariable();
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
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Java8Parser.RULE_methodBody);
		try {
			this.state = 1128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1126;
				this.block();
				}
				break;
			case Java8Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1127;
				this.match(Java8Parser.SEMI);
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
	public instanceInitializer(): InstanceInitializerContext {
		let _localctx: InstanceInitializerContext = new InstanceInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Java8Parser.RULE_instanceInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1130;
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
	public staticInitializer(): StaticInitializerContext {
		let _localctx: StaticInitializerContext = new StaticInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Java8Parser.RULE_staticInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1132;
			this.match(Java8Parser.STATIC);
			this.state = 1133;
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
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Java8Parser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 1135;
				this.constructorModifier();
				}
				}
				this.state = 1140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1141;
			this.constructorDeclarator();
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.THROWS) {
				{
				this.state = 1142;
				this.throws_();
				}
			}

			this.state = 1145;
			this.constructorBody();
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
	public constructorModifier(): ConstructorModifierContext {
		let _localctx: ConstructorModifierContext = new ConstructorModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Java8Parser.RULE_constructorModifier);
		try {
			this.state = 1151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1147;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1148;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1149;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1150;
				this.match(Java8Parser.PRIVATE);
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
	public constructorDeclarator(): ConstructorDeclaratorContext {
		let _localctx: ConstructorDeclaratorContext = new ConstructorDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Java8Parser.RULE_constructorDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 1153;
				this.typeParameters();
				}
			}

			this.state = 1156;
			this.simpleTypeName();
			this.state = 1157;
			this.match(Java8Parser.LPAREN);
			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la===Java8Parser.SHORT || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1158;
				this.formalParameterList();
				}
			}

			this.state = 1161;
			this.match(Java8Parser.RPAREN);
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
	public simpleTypeName(): SimpleTypeNameContext {
		let _localctx: SimpleTypeNameContext = new SimpleTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Java8Parser.RULE_simpleTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1163;
			this.match(Java8Parser.Identifier);
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
	public constructorBody(): ConstructorBodyContext {
		let _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Java8Parser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.match(Java8Parser.LBRACE);
			this.state = 1167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,103,this._ctx) ) {
			case 1:
				{
				this.state = 1166;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 1170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1169;
				this.blockStatements();
				}
			}

			this.state = 1172;
			this.match(Java8Parser.RBRACE);
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
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let _localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Java8Parser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 1220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,113,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 1174;
					this.typeArguments();
					}
				}

				this.state = 1177;
				this.match(Java8Parser.THIS);
				this.state = 1178;
				this.match(Java8Parser.LPAREN);
				this.state = 1180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 1179;
					this.argumentList();
					}
				}

				this.state = 1182;
				this.match(Java8Parser.RPAREN);
				this.state = 1183;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 1184;
					this.typeArguments();
					}
				}

				this.state = 1187;
				this.match(Java8Parser.SUPER);
				this.state = 1188;
				this.match(Java8Parser.LPAREN);
				this.state = 1190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 1189;
					this.argumentList();
					}
				}

				this.state = 1192;
				this.match(Java8Parser.RPAREN);
				this.state = 1193;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1194;
				this.expressionName();
				this.state = 1195;
				this.match(Java8Parser.DOT);
				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 1196;
					this.typeArguments();
					}
				}

				this.state = 1199;
				this.match(Java8Parser.SUPER);
				this.state = 1200;
				this.match(Java8Parser.LPAREN);
				this.state = 1202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 1201;
					this.argumentList();
					}
				}

				this.state = 1204;
				this.match(Java8Parser.RPAREN);
				this.state = 1205;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1207;
				this.primary();
				this.state = 1208;
				this.match(Java8Parser.DOT);
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 1209;
					this.typeArguments();
					}
				}

				this.state = 1212;
				this.match(Java8Parser.SUPER);
				this.state = 1213;
				this.match(Java8Parser.LPAREN);
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 1214;
					this.argumentList();
					}
				}

				this.state = 1217;
				this.match(Java8Parser.RPAREN);
				this.state = 1218;
				this.match(Java8Parser.SEMI);
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
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Java8Parser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.ABSTRACT || _la===Java8Parser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 1222;
				this.classModifier();
				}
				}
				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1228;
			this.match(Java8Parser.ENUM);
			this.state = 1229;
			this.match(Java8Parser.Identifier);
			this.state = 1231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.IMPLEMENTS) {
				{
				this.state = 1230;
				this.superinterfaces();
				}
			}

			this.state = 1233;
			this.enumBody();
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
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Java8Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1235;
			this.match(Java8Parser.LBRACE);
			this.state = 1237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1236;
				this.enumConstantList();
				}
			}

			this.state = 1240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.COMMA) {
				{
				this.state = 1239;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.SEMI) {
				{
				this.state = 1242;
				this.enumBodyDeclarations();
				}
			}

			this.state = 1245;
			this.match(Java8Parser.RBRACE);
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
	public enumConstantList(): EnumConstantListContext {
		let _localctx: EnumConstantListContext = new EnumConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Java8Parser.RULE_enumConstantList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this.enumConstant();
			this.state = 1252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,119,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1248;
					this.match(Java8Parser.COMMA);
					this.state = 1249;
					this.enumConstant();
					}
					} 
				}
				this.state = 1254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,119,this._ctx);
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
		this.enterRule(_localctx, 192, Java8Parser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 1255;
				this.enumConstantModifier();
				}
				}
				this.state = 1260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1261;
			this.match(Java8Parser.Identifier);
			this.state = 1267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LPAREN) {
				{
				this.state = 1262;
				this.match(Java8Parser.LPAREN);
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 1263;
					this.argumentList();
					}
				}

				this.state = 1266;
				this.match(Java8Parser.RPAREN);
				}
			}

			this.state = 1270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LBRACE) {
				{
				this.state = 1269;
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
	public enumConstantModifier(): EnumConstantModifierContext {
		let _localctx: EnumConstantModifierContext = new EnumConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Java8Parser.RULE_enumConstantModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			this.annotation();
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
		this.enterRule(_localctx, 196, Java8Parser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this.match(Java8Parser.SEMI);
			this.state = 1278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || _la===Java8Parser.LT || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				{
				this.state = 1275;
				this.classBodyDeclaration();
				}
				}
				this.state = 1280;
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
		this.enterRule(_localctx, 198, Java8Parser.RULE_interfaceDeclaration);
		try {
			this.state = 1283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,125,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1281;
				this.normalInterfaceDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1282;
				this.annotationTypeDeclaration();
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
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let _localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Java8Parser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.ABSTRACT || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 1285;
				this.interfaceModifier();
				}
				}
				this.state = 1290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1291;
			this.match(Java8Parser.INTERFACE);
			this.state = 1292;
			this.match(Java8Parser.Identifier);
			this.state = 1294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 1293;
				this.typeParameters();
				}
			}

			this.state = 1297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.EXTENDS) {
				{
				this.state = 1296;
				this.extendsInterfaces();
				}
			}

			this.state = 1299;
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
	public interfaceModifier(): InterfaceModifierContext {
		let _localctx: InterfaceModifierContext = new InterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Java8Parser.RULE_interfaceModifier);
		try {
			this.state = 1308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1301;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1302;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1303;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1304;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1305;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1306;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1307;
				this.match(Java8Parser.STRICTFP);
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
	public extendsInterfaces(): ExtendsInterfacesContext {
		let _localctx: ExtendsInterfacesContext = new ExtendsInterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Java8Parser.RULE_extendsInterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1310;
			this.match(Java8Parser.EXTENDS);
			this.state = 1311;
			this.interfaceTypeList();
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
		this.enterRule(_localctx, 206, Java8Parser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1313;
			this.match(Java8Parser.LBRACE);
			this.state = 1317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.DEFAULT) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || _la===Java8Parser.LT || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				{
				this.state = 1314;
				this.interfaceMemberDeclaration();
				}
				}
				this.state = 1319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1320;
			this.match(Java8Parser.RBRACE);
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
		this.enterRule(_localctx, 208, Java8Parser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 1327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,131,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1322;
				this.constantDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1323;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1324;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1325;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1326;
				this.match(Java8Parser.SEMI);
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
	public constantDeclaration(): ConstantDeclarationContext {
		let _localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Java8Parser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (Java8Parser.FINAL - 18)) | (1 << (Java8Parser.PUBLIC - 18)) | (1 << (Java8Parser.STATIC - 18)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 1329;
				this.constantModifier();
				}
				}
				this.state = 1334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1335;
			this.unannType();
			this.state = 1336;
			this.variableDeclaratorList();
			this.state = 1337;
			this.match(Java8Parser.SEMI);
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
	public constantModifier(): ConstantModifierContext {
		let _localctx: ConstantModifierContext = new ConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, Java8Parser.RULE_constantModifier);
		try {
			this.state = 1343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1339;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1340;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1341;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1342;
				this.match(Java8Parser.FINAL);
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
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, Java8Parser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.ABSTRACT || _la===Java8Parser.DEFAULT || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java8Parser.PUBLIC - 35)) | (1 << (Java8Parser.STATIC - 35)) | (1 << (Java8Parser.STRICTFP - 35)))) !== 0) || _la===Java8Parser.AT) {
				{
				{
				this.state = 1345;
				this.interfaceMethodModifier();
				}
				}
				this.state = 1350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1351;
			this.methodHeader();
			this.state = 1352;
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
		this.enterRule(_localctx, 216, Java8Parser.RULE_interfaceMethodModifier);
		try {
			this.state = 1360;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1354;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1355;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1356;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1357;
				this.match(Java8Parser.DEFAULT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1358;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1359;
				this.match(Java8Parser.STRICTFP);
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
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, Java8Parser.RULE_annotationTypeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1365;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,136,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1362;
					this.interfaceModifier();
					}
					} 
				}
				this.state = 1367;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,136,this._ctx);
			}
			this.state = 1368;
			this.match(Java8Parser.AT);
			this.state = 1369;
			this.match(Java8Parser.INTERFACE);
			this.state = 1370;
			this.match(Java8Parser.Identifier);
			this.state = 1371;
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
		this.enterRule(_localctx, 220, Java8Parser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1373;
			this.match(Java8Parser.LBRACE);
			this.state = 1377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				{
				this.state = 1374;
				this.annotationTypeMemberDeclaration();
				}
				}
				this.state = 1379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1380;
			this.match(Java8Parser.RBRACE);
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
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext {
		let _localctx: AnnotationTypeMemberDeclarationContext = new AnnotationTypeMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, Java8Parser.RULE_annotationTypeMemberDeclaration);
		try {
			this.state = 1387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1382;
				this.annotationTypeElementDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1383;
				this.constantDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1384;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1385;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1386;
				this.match(Java8Parser.SEMI);
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
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, Java8Parser.RULE_annotationTypeElementDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.ABSTRACT || _la===Java8Parser.PUBLIC || _la===Java8Parser.AT) {
				{
				{
				this.state = 1389;
				this.annotationTypeElementModifier();
				}
				}
				this.state = 1394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1395;
			this.unannType();
			this.state = 1396;
			this.match(Java8Parser.Identifier);
			this.state = 1397;
			this.match(Java8Parser.LPAREN);
			this.state = 1398;
			this.match(Java8Parser.RPAREN);
			this.state = 1400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LBRACK || _la===Java8Parser.AT) {
				{
				this.state = 1399;
				this.dims();
				}
			}

			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.DEFAULT) {
				{
				this.state = 1402;
				this.defaultValue();
				}
			}

			this.state = 1405;
			this.match(Java8Parser.SEMI);
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
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext {
		let _localctx: AnnotationTypeElementModifierContext = new AnnotationTypeElementModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, Java8Parser.RULE_annotationTypeElementModifier);
		try {
			this.state = 1410;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1407;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1408;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1409;
				this.match(Java8Parser.ABSTRACT);
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
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, Java8Parser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this.match(Java8Parser.DEFAULT);
			this.state = 1413;
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
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Java8Parser.RULE_annotation);
		try {
			this.state = 1418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,143,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1415;
				this.normalAnnotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1416;
				this.markerAnnotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1417;
				this.singleElementAnnotation();
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
	public normalAnnotation(): NormalAnnotationContext {
		let _localctx: NormalAnnotationContext = new NormalAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, Java8Parser.RULE_normalAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1420;
			this.match(Java8Parser.AT);
			this.state = 1421;
			this.typeName();
			this.state = 1422;
			this.match(Java8Parser.LPAREN);
			this.state = 1424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.Identifier) {
				{
				this.state = 1423;
				this.elementValuePairList();
				}
			}

			this.state = 1426;
			this.match(Java8Parser.RPAREN);
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
	public elementValuePairList(): ElementValuePairListContext {
		let _localctx: ElementValuePairListContext = new ElementValuePairListContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, Java8Parser.RULE_elementValuePairList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1428;
			this.elementValuePair();
			this.state = 1433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 1429;
				this.match(Java8Parser.COMMA);
				this.state = 1430;
				this.elementValuePair();
				}
				}
				this.state = 1435;
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
		this.enterRule(_localctx, 236, Java8Parser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1436;
			this.match(Java8Parser.Identifier);
			this.state = 1437;
			this.match(Java8Parser.ASSIGN);
			this.state = 1438;
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
		this.enterRule(_localctx, 238, Java8Parser.RULE_elementValue);
		try {
			this.state = 1443;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,146,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1440;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1441;
				this.elementValueArrayInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1442;
				this.annotation();
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
		this.enterRule(_localctx, 240, Java8Parser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1445;
			this.match(Java8Parser.LBRACE);
			this.state = 1447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)) | (1 << (Java8Parser.LBRACE - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1446;
				this.elementValueList();
				}
			}

			this.state = 1450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.COMMA) {
				{
				this.state = 1449;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1452;
			this.match(Java8Parser.RBRACE);
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
	public elementValueList(): ElementValueListContext {
		let _localctx: ElementValueListContext = new ElementValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, Java8Parser.RULE_elementValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1454;
			this.elementValue();
			this.state = 1459;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1455;
					this.match(Java8Parser.COMMA);
					this.state = 1456;
					this.elementValue();
					}
					} 
				}
				this.state = 1461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
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
	public markerAnnotation(): MarkerAnnotationContext {
		let _localctx: MarkerAnnotationContext = new MarkerAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, Java8Parser.RULE_markerAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this.match(Java8Parser.AT);
			this.state = 1463;
			this.typeName();
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
	public singleElementAnnotation(): SingleElementAnnotationContext {
		let _localctx: SingleElementAnnotationContext = new SingleElementAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Java8Parser.RULE_singleElementAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1465;
			this.match(Java8Parser.AT);
			this.state = 1466;
			this.typeName();
			this.state = 1467;
			this.match(Java8Parser.LPAREN);
			this.state = 1468;
			this.elementValue();
			this.state = 1469;
			this.match(Java8Parser.RPAREN);
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
		this.enterRule(_localctx, 248, Java8Parser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1471;
			this.match(Java8Parser.LBRACE);
			this.state = 1473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)) | (1 << (Java8Parser.LBRACE - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1472;
				this.variableInitializerList();
				}
			}

			this.state = 1476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.COMMA) {
				{
				this.state = 1475;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1478;
			this.match(Java8Parser.RBRACE);
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
	public variableInitializerList(): VariableInitializerListContext {
		let _localctx: VariableInitializerListContext = new VariableInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, Java8Parser.RULE_variableInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1480;
			this.variableInitializer();
			this.state = 1485;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,152,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1481;
					this.match(Java8Parser.COMMA);
					this.state = 1482;
					this.variableInitializer();
					}
					} 
				}
				this.state = 1487;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,152,this._ctx);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, Java8Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1488;
			this.match(Java8Parser.LBRACE);
			this.state = 1490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1489;
				this.blockStatements();
				}
			}

			this.state = 1492;
			this.match(Java8Parser.RBRACE);
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
	public blockStatements(): BlockStatementsContext {
		let _localctx: BlockStatementsContext = new BlockStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, Java8Parser.RULE_blockStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1494;
			this.blockStatement();
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				{
				this.state = 1495;
				this.blockStatement();
				}
				}
				this.state = 1500;
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
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, Java8Parser.RULE_blockStatement);
		try {
			this.state = 1504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,155,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1501;
				this.localVariableDeclarationStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1502;
				this.classDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1503;
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
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, Java8Parser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.localVariableDeclaration();
			this.state = 1507;
			this.match(Java8Parser.SEMI);
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
		this.enterRule(_localctx, 260, Java8Parser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.FINAL || _la===Java8Parser.AT) {
				{
				{
				this.state = 1509;
				this.variableModifier();
				}
				}
				this.state = 1514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1515;
			this.unannType();
			this.state = 1516;
			this.variableDeclaratorList();
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
		this.enterRule(_localctx, 262, Java8Parser.RULE_statement);
		try {
			this.state = 1524;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1518;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1519;
				this.labeledStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1520;
				this.ifThenStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1521;
				this.ifThenElseStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1522;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1523;
				this.forStatement();
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
	public statementNoShortIf(): StatementNoShortIfContext {
		let _localctx: StatementNoShortIfContext = new StatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Java8Parser.RULE_statementNoShortIf);
		try {
			this.state = 1531;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,158,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1526;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1527;
				this.labeledStatementNoShortIf();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1528;
				this.ifThenElseStatementNoShortIf();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1529;
				this.whileStatementNoShortIf();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1530;
				this.forStatementNoShortIf();
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
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		let _localctx: StatementWithoutTrailingSubstatementContext = new StatementWithoutTrailingSubstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, Java8Parser.RULE_statementWithoutTrailingSubstatement);
		try {
			this.state = 1545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1533;
				this.block();
				}
				break;
			case Java8Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1534;
				this.emptyStatement();
				}
				break;
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.INC:
			case Java8Parser.DEC:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1535;
				this.expressionStatement();
				}
				break;
			case Java8Parser.ASSERT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1536;
				this.assertStatement();
				}
				break;
			case Java8Parser.SWITCH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1537;
				this.switchStatement();
				}
				break;
			case Java8Parser.DO:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1538;
				this.doStatement();
				}
				break;
			case Java8Parser.BREAK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1539;
				this.breakStatement();
				}
				break;
			case Java8Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1540;
				this.continueStatement();
				}
				break;
			case Java8Parser.RETURN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1541;
				this.returnStatement();
				}
				break;
			case Java8Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1542;
				this.synchronizedStatement();
				}
				break;
			case Java8Parser.THROW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1543;
				this.throwStatement();
				}
				break;
			case Java8Parser.TRY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1544;
				this.tryStatement();
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
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, Java8Parser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this.match(Java8Parser.SEMI);
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
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Java8Parser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1549;
			this.match(Java8Parser.Identifier);
			this.state = 1550;
			this.match(Java8Parser.COLON);
			this.state = 1551;
			this.statement();
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
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		let _localctx: LabeledStatementNoShortIfContext = new LabeledStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Java8Parser.RULE_labeledStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1553;
			this.match(Java8Parser.Identifier);
			this.state = 1554;
			this.match(Java8Parser.COLON);
			this.state = 1555;
			this.statementNoShortIf();
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, Java8Parser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1557;
			this.statementExpression();
			this.state = 1558;
			this.match(Java8Parser.SEMI);
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
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, Java8Parser.RULE_statementExpression);
		try {
			this.state = 1567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,160,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1560;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1561;
				this.preIncrementExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1562;
				this.preDecrementExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1563;
				this.postIncrementExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1564;
				this.postDecrementExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1565;
				this.methodInvocation();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1566;
				this.classInstanceCreationExpression();
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
	public ifThenStatement(): IfThenStatementContext {
		let _localctx: IfThenStatementContext = new IfThenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Java8Parser.RULE_ifThenStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1569;
			this.match(Java8Parser.IF);
			this.state = 1570;
			this.match(Java8Parser.LPAREN);
			this.state = 1571;
			this.expression();
			this.state = 1572;
			this.match(Java8Parser.RPAREN);
			this.state = 1573;
			this.statement();
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
	public ifThenElseStatement(): IfThenElseStatementContext {
		let _localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, Java8Parser.RULE_ifThenElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this.match(Java8Parser.IF);
			this.state = 1576;
			this.match(Java8Parser.LPAREN);
			this.state = 1577;
			this.expression();
			this.state = 1578;
			this.match(Java8Parser.RPAREN);
			this.state = 1579;
			this.statementNoShortIf();
			this.state = 1580;
			this.match(Java8Parser.ELSE);
			this.state = 1581;
			this.statement();
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
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		let _localctx: IfThenElseStatementNoShortIfContext = new IfThenElseStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, Java8Parser.RULE_ifThenElseStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1583;
			this.match(Java8Parser.IF);
			this.state = 1584;
			this.match(Java8Parser.LPAREN);
			this.state = 1585;
			this.expression();
			this.state = 1586;
			this.match(Java8Parser.RPAREN);
			this.state = 1587;
			this.statementNoShortIf();
			this.state = 1588;
			this.match(Java8Parser.ELSE);
			this.state = 1589;
			this.statementNoShortIf();
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
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, Java8Parser.RULE_assertStatement);
		try {
			this.state = 1601;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,161,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1591;
				this.match(Java8Parser.ASSERT);
				this.state = 1592;
				this.expression();
				this.state = 1593;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1595;
				this.match(Java8Parser.ASSERT);
				this.state = 1596;
				this.expression();
				this.state = 1597;
				this.match(Java8Parser.COLON);
				this.state = 1598;
				this.expression();
				this.state = 1599;
				this.match(Java8Parser.SEMI);
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
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Java8Parser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1603;
			this.match(Java8Parser.SWITCH);
			this.state = 1604;
			this.match(Java8Parser.LPAREN);
			this.state = 1605;
			this.expression();
			this.state = 1606;
			this.match(Java8Parser.RPAREN);
			this.state = 1607;
			this.switchBlock();
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
	public switchBlock(): SwitchBlockContext {
		let _localctx: SwitchBlockContext = new SwitchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Java8Parser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1609;
			this.match(Java8Parser.LBRACE);
			this.state = 1613;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,162,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1610;
					this.switchBlockStatementGroup();
					}
					} 
				}
				this.state = 1615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,162,this._ctx);
			}
			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.CASE || _la===Java8Parser.DEFAULT) {
				{
				{
				this.state = 1616;
				this.switchLabel();
				}
				}
				this.state = 1621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1622;
			this.match(Java8Parser.RBRACE);
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
		this.enterRule(_localctx, 290, Java8Parser.RULE_switchBlockStatementGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1624;
			this.switchLabels();
			this.state = 1625;
			this.blockStatements();
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
	public switchLabels(): SwitchLabelsContext {
		let _localctx: SwitchLabelsContext = new SwitchLabelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, Java8Parser.RULE_switchLabels);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this.switchLabel();
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.CASE || _la===Java8Parser.DEFAULT) {
				{
				{
				this.state = 1628;
				this.switchLabel();
				}
				}
				this.state = 1633;
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
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, Java8Parser.RULE_switchLabel);
		try {
			this.state = 1644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,165,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1634;
				this.match(Java8Parser.CASE);
				this.state = 1635;
				this.constantExpression();
				this.state = 1636;
				this.match(Java8Parser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1638;
				this.match(Java8Parser.CASE);
				this.state = 1639;
				this.enumConstantName();
				this.state = 1640;
				this.match(Java8Parser.COLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1642;
				this.match(Java8Parser.DEFAULT);
				this.state = 1643;
				this.match(Java8Parser.COLON);
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
	public enumConstantName(): EnumConstantNameContext {
		let _localctx: EnumConstantNameContext = new EnumConstantNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, Java8Parser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1646;
			this.match(Java8Parser.Identifier);
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, Java8Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1648;
			this.match(Java8Parser.WHILE);
			this.state = 1649;
			this.match(Java8Parser.LPAREN);
			this.state = 1650;
			this.expression();
			this.state = 1651;
			this.match(Java8Parser.RPAREN);
			this.state = 1652;
			this.statement();
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
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		let _localctx: WhileStatementNoShortIfContext = new WhileStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, Java8Parser.RULE_whileStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1654;
			this.match(Java8Parser.WHILE);
			this.state = 1655;
			this.match(Java8Parser.LPAREN);
			this.state = 1656;
			this.expression();
			this.state = 1657;
			this.match(Java8Parser.RPAREN);
			this.state = 1658;
			this.statementNoShortIf();
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
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Java8Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1660;
			this.match(Java8Parser.DO);
			this.state = 1661;
			this.statement();
			this.state = 1662;
			this.match(Java8Parser.WHILE);
			this.state = 1663;
			this.match(Java8Parser.LPAREN);
			this.state = 1664;
			this.expression();
			this.state = 1665;
			this.match(Java8Parser.RPAREN);
			this.state = 1666;
			this.match(Java8Parser.SEMI);
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, Java8Parser.RULE_forStatement);
		try {
			this.state = 1670;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,166,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1668;
				this.basicForStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1669;
				this.enhancedForStatement();
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
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		let _localctx: ForStatementNoShortIfContext = new ForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, Java8Parser.RULE_forStatementNoShortIf);
		try {
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,167,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1672;
				this.basicForStatementNoShortIf();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1673;
				this.enhancedForStatementNoShortIf();
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
	public basicForStatement(): BasicForStatementContext {
		let _localctx: BasicForStatementContext = new BasicForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, Java8Parser.RULE_basicForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.match(Java8Parser.FOR);
			this.state = 1677;
			this.match(Java8Parser.LPAREN);
			this.state = 1679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1678;
				this.forInit();
				}
			}

			this.state = 1681;
			this.match(Java8Parser.SEMI);
			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1682;
				this.expression();
				}
			}

			this.state = 1685;
			this.match(Java8Parser.SEMI);
			this.state = 1687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1686;
				this.forUpdate();
				}
			}

			this.state = 1689;
			this.match(Java8Parser.RPAREN);
			this.state = 1690;
			this.statement();
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
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		let _localctx: BasicForStatementNoShortIfContext = new BasicForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, Java8Parser.RULE_basicForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1692;
			this.match(Java8Parser.FOR);
			this.state = 1693;
			this.match(Java8Parser.LPAREN);
			this.state = 1695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1694;
				this.forInit();
				}
			}

			this.state = 1697;
			this.match(Java8Parser.SEMI);
			this.state = 1699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1698;
				this.expression();
				}
			}

			this.state = 1701;
			this.match(Java8Parser.SEMI);
			this.state = 1703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1702;
				this.forUpdate();
				}
			}

			this.state = 1705;
			this.match(Java8Parser.RPAREN);
			this.state = 1706;
			this.statementNoShortIf();
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
		this.enterRule(_localctx, 312, Java8Parser.RULE_forInit);
		try {
			this.state = 1710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,174,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1708;
				this.statementExpressionList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1709;
				this.localVariableDeclaration();
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
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, Java8Parser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1712;
			this.statementExpressionList();
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
	public statementExpressionList(): StatementExpressionListContext {
		let _localctx: StatementExpressionListContext = new StatementExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, Java8Parser.RULE_statementExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1714;
			this.statementExpression();
			this.state = 1719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 1715;
				this.match(Java8Parser.COMMA);
				this.state = 1716;
				this.statementExpression();
				}
				}
				this.state = 1721;
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
	public enhancedForStatement(): EnhancedForStatementContext {
		let _localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, Java8Parser.RULE_enhancedForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1722;
			this.match(Java8Parser.FOR);
			this.state = 1723;
			this.match(Java8Parser.LPAREN);
			this.state = 1727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.FINAL || _la===Java8Parser.AT) {
				{
				{
				this.state = 1724;
				this.variableModifier();
				}
				}
				this.state = 1729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1730;
			this.unannType();
			this.state = 1731;
			this.variableDeclaratorId();
			this.state = 1732;
			this.match(Java8Parser.COLON);
			this.state = 1733;
			this.expression();
			this.state = 1734;
			this.match(Java8Parser.RPAREN);
			this.state = 1735;
			this.statement();
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
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		let _localctx: EnhancedForStatementNoShortIfContext = new EnhancedForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, Java8Parser.RULE_enhancedForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1737;
			this.match(Java8Parser.FOR);
			this.state = 1738;
			this.match(Java8Parser.LPAREN);
			this.state = 1742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.FINAL || _la===Java8Parser.AT) {
				{
				{
				this.state = 1739;
				this.variableModifier();
				}
				}
				this.state = 1744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1745;
			this.unannType();
			this.state = 1746;
			this.variableDeclaratorId();
			this.state = 1747;
			this.match(Java8Parser.COLON);
			this.state = 1748;
			this.expression();
			this.state = 1749;
			this.match(Java8Parser.RPAREN);
			this.state = 1750;
			this.statementNoShortIf();
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
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, Java8Parser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1752;
			this.match(Java8Parser.BREAK);
			this.state = 1754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.Identifier) {
				{
				this.state = 1753;
				this.match(Java8Parser.Identifier);
				}
			}

			this.state = 1756;
			this.match(Java8Parser.SEMI);
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
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, Java8Parser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1758;
			this.match(Java8Parser.CONTINUE);
			this.state = 1760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.Identifier) {
				{
				this.state = 1759;
				this.match(Java8Parser.Identifier);
				}
			}

			this.state = 1762;
			this.match(Java8Parser.SEMI);
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Java8Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1764;
			this.match(Java8Parser.RETURN);
			this.state = 1766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 1765;
				this.expression();
				}
			}

			this.state = 1768;
			this.match(Java8Parser.SEMI);
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
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, Java8Parser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
			this.match(Java8Parser.THROW);
			this.state = 1771;
			this.expression();
			this.state = 1772;
			this.match(Java8Parser.SEMI);
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
	public synchronizedStatement(): SynchronizedStatementContext {
		let _localctx: SynchronizedStatementContext = new SynchronizedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, Java8Parser.RULE_synchronizedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1774;
			this.match(Java8Parser.SYNCHRONIZED);
			this.state = 1775;
			this.match(Java8Parser.LPAREN);
			this.state = 1776;
			this.expression();
			this.state = 1777;
			this.match(Java8Parser.RPAREN);
			this.state = 1778;
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
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, Java8Parser.RULE_tryStatement);
		let _la: number;
		try {
			this.state = 1792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,182,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1780;
				this.match(Java8Parser.TRY);
				this.state = 1781;
				this.block();
				this.state = 1782;
				this.catches();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1784;
				this.match(Java8Parser.TRY);
				this.state = 1785;
				this.block();
				this.state = 1787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.CATCH) {
					{
					this.state = 1786;
					this.catches();
					}
				}

				this.state = 1789;
				this.finally_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1791;
				this.tryWithResourcesStatement();
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
	public catches(): CatchesContext {
		let _localctx: CatchesContext = new CatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, Java8Parser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1794;
			this.catchClause();
			this.state = 1798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.CATCH) {
				{
				{
				this.state = 1795;
				this.catchClause();
				}
				}
				this.state = 1800;
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
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, Java8Parser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1801;
			this.match(Java8Parser.CATCH);
			this.state = 1802;
			this.match(Java8Parser.LPAREN);
			this.state = 1803;
			this.catchFormalParameter();
			this.state = 1804;
			this.match(Java8Parser.RPAREN);
			this.state = 1805;
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
	public catchFormalParameter(): CatchFormalParameterContext {
		let _localctx: CatchFormalParameterContext = new CatchFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, Java8Parser.RULE_catchFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.FINAL || _la===Java8Parser.AT) {
				{
				{
				this.state = 1807;
				this.variableModifier();
				}
				}
				this.state = 1812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1813;
			this.catchType();
			this.state = 1814;
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
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, Java8Parser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1816;
			this.unannClassType();
			this.state = 1821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.BITOR) {
				{
				{
				this.state = 1817;
				this.match(Java8Parser.BITOR);
				this.state = 1818;
				this.classType();
				}
				}
				this.state = 1823;
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
	public finally_(): Finally_Context {
		let _localctx: Finally_Context = new Finally_Context(this._ctx, this.state);
		this.enterRule(_localctx, 342, Java8Parser.RULE_finally_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			this.match(Java8Parser.FINALLY);
			this.state = 1825;
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
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		let _localctx: TryWithResourcesStatementContext = new TryWithResourcesStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Java8Parser.RULE_tryWithResourcesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this.match(Java8Parser.TRY);
			this.state = 1828;
			this.resourceSpecification();
			this.state = 1829;
			this.block();
			this.state = 1831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.CATCH) {
				{
				this.state = 1830;
				this.catches();
				}
			}

			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.FINALLY) {
				{
				this.state = 1833;
				this.finally_();
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
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, Java8Parser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1836;
			this.match(Java8Parser.LPAREN);
			this.state = 1837;
			this.resourceList();
			this.state = 1839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.SEMI) {
				{
				this.state = 1838;
				this.match(Java8Parser.SEMI);
				}
			}

			this.state = 1841;
			this.match(Java8Parser.RPAREN);
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
	public resourceList(): ResourceListContext {
		let _localctx: ResourceListContext = new ResourceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, Java8Parser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1843;
			this.resource();
			this.state = 1848;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,189,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1844;
					this.match(Java8Parser.SEMI);
					this.state = 1845;
					this.resource();
					}
					} 
				}
				this.state = 1850;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,189,this._ctx);
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
		this.enterRule(_localctx, 350, Java8Parser.RULE_resource);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.FINAL || _la===Java8Parser.AT) {
				{
				{
				this.state = 1851;
				this.variableModifier();
				}
				}
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1857;
			this.unannType();
			this.state = 1858;
			this.variableDeclaratorId();
			this.state = 1859;
			this.match(Java8Parser.ASSIGN);
			this.state = 1860;
			this.expression();
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
		this.enterRule(_localctx, 352, Java8Parser.RULE_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,191,this._ctx) ) {
			case 1:
				{
				this.state = 1862;
				this.primaryNoNewArray_lfno_primary();
				}
				break;

			case 2:
				{
				this.state = 1863;
				this.arrayCreationExpression();
				}
				break;
			}
			this.state = 1869;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,192,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1866;
					this.primaryNoNewArray_lf_primary();
					}
					} 
				}
				this.state = 1871;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,192,this._ctx);
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
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		let _localctx: PrimaryNoNewArrayContext = new PrimaryNoNewArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, Java8Parser.RULE_primaryNoNewArray);
		let _la: number;
		try {
			this.state = 1901;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,194,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1872;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1873;
				this.typeName();
				this.state = 1878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.LBRACK) {
					{
					{
					this.state = 1874;
					this.match(Java8Parser.LBRACK);
					this.state = 1875;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1881;
				this.match(Java8Parser.DOT);
				this.state = 1882;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1884;
				this.match(Java8Parser.VOID);
				this.state = 1885;
				this.match(Java8Parser.DOT);
				this.state = 1886;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1887;
				this.match(Java8Parser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1888;
				this.typeName();
				this.state = 1889;
				this.match(Java8Parser.DOT);
				this.state = 1890;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1892;
				this.match(Java8Parser.LPAREN);
				this.state = 1893;
				this.expression();
				this.state = 1894;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1896;
				this.classInstanceCreationExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1897;
				this.fieldAccess();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1898;
				this.arrayAccess();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1899;
				this.methodInvocation();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1900;
				this.methodReference();
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
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lf_arrayAccessContext = new PrimaryNoNewArray_lf_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lfno_arrayAccessContext = new PrimaryNoNewArray_lfno_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess);
		let _la: number;
		try {
			this.state = 1933;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,196,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1905;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1906;
				this.typeName();
				this.state = 1911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.LBRACK) {
					{
					{
					this.state = 1907;
					this.match(Java8Parser.LBRACK);
					this.state = 1908;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1913;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1914;
				this.match(Java8Parser.DOT);
				this.state = 1915;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1917;
				this.match(Java8Parser.VOID);
				this.state = 1918;
				this.match(Java8Parser.DOT);
				this.state = 1919;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1920;
				this.match(Java8Parser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1921;
				this.typeName();
				this.state = 1922;
				this.match(Java8Parser.DOT);
				this.state = 1923;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1925;
				this.match(Java8Parser.LPAREN);
				this.state = 1926;
				this.expression();
				this.state = 1927;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1929;
				this.classInstanceCreationExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1930;
				this.fieldAccess();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1931;
				this.methodInvocation();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1932;
				this.methodReference();
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
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primaryContext = new PrimaryNoNewArray_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, Java8Parser.RULE_primaryNoNewArray_lf_primary);
		try {
			this.state = 1940;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,197,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1935;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1936;
				this.fieldAccess_lf_primary();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1937;
				this.arrayAccess_lf_primary();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1938;
				this.methodInvocation_lf_primary();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1939;
				this.methodReference_lf_primary();
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
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary);
		try {
			this.state = 1948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,198,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1944;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1945;
				this.fieldAccess_lf_primary();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1946;
				this.methodInvocation_lf_primary();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1947;
				this.methodReference_lf_primary();
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
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primaryContext = new PrimaryNoNewArray_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, Java8Parser.RULE_primaryNoNewArray_lfno_primary);
		let _la: number;
		try {
			this.state = 1990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,201,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1950;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
				this.typeName();
				this.state = 1956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.LBRACK) {
					{
					{
					this.state = 1952;
					this.match(Java8Parser.LBRACK);
					this.state = 1953;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1958;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1959;
				this.match(Java8Parser.DOT);
				this.state = 1960;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1962;
				this.unannPrimitiveType();
				this.state = 1967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.LBRACK) {
					{
					{
					this.state = 1963;
					this.match(Java8Parser.LBRACK);
					this.state = 1964;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1969;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1970;
				this.match(Java8Parser.DOT);
				this.state = 1971;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1973;
				this.match(Java8Parser.VOID);
				this.state = 1974;
				this.match(Java8Parser.DOT);
				this.state = 1975;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1976;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1977;
				this.typeName();
				this.state = 1978;
				this.match(Java8Parser.DOT);
				this.state = 1979;
				this.match(Java8Parser.THIS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1981;
				this.match(Java8Parser.LPAREN);
				this.state = 1982;
				this.expression();
				this.state = 1983;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1985;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1986;
				this.fieldAccess_lfno_primary();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1987;
				this.arrayAccess_lfno_primary();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1988;
				this.methodInvocation_lfno_primary();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1989;
				this.methodReference_lfno_primary();
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
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary);
		let _la: number;
		try {
			this.state = 2033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,204,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1994;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1995;
				this.typeName();
				this.state = 2000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.LBRACK) {
					{
					{
					this.state = 1996;
					this.match(Java8Parser.LBRACK);
					this.state = 1997;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 2002;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2003;
				this.match(Java8Parser.DOT);
				this.state = 2004;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2006;
				this.unannPrimitiveType();
				this.state = 2011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.LBRACK) {
					{
					{
					this.state = 2007;
					this.match(Java8Parser.LBRACK);
					this.state = 2008;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 2013;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2014;
				this.match(Java8Parser.DOT);
				this.state = 2015;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2017;
				this.match(Java8Parser.VOID);
				this.state = 2018;
				this.match(Java8Parser.DOT);
				this.state = 2019;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2020;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2021;
				this.typeName();
				this.state = 2022;
				this.match(Java8Parser.DOT);
				this.state = 2023;
				this.match(Java8Parser.THIS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2025;
				this.match(Java8Parser.LPAREN);
				this.state = 2026;
				this.expression();
				this.state = 2027;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2029;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2030;
				this.fieldAccess_lfno_primary();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2031;
				this.methodInvocation_lfno_primary();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2032;
				this.methodReference_lfno_primary();
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
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		let _localctx: ClassInstanceCreationExpressionContext = new ClassInstanceCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, Java8Parser.RULE_classInstanceCreationExpression);
		let _la: number;
		try {
			this.state = 2118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,222,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2035;
				this.match(Java8Parser.NEW);
				this.state = 2037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2036;
					this.typeArguments();
					}
				}

				this.state = 2042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 2039;
					this.annotation();
					}
					}
					this.state = 2044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2045;
				this.match(Java8Parser.Identifier);
				this.state = 2056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.DOT) {
					{
					{
					this.state = 2046;
					this.match(Java8Parser.DOT);
					this.state = 2050;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===Java8Parser.AT) {
						{
						{
						this.state = 2047;
						this.annotation();
						}
						}
						this.state = 2052;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2053;
					this.match(Java8Parser.Identifier);
					}
					}
					this.state = 2058;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2059;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2062;
				this.match(Java8Parser.LPAREN);
				this.state = 2064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2063;
					this.argumentList();
					}
				}

				this.state = 2066;
				this.match(Java8Parser.RPAREN);
				this.state = 2068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LBRACE) {
					{
					this.state = 2067;
					this.classBody();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2070;
				this.expressionName();
				this.state = 2071;
				this.match(Java8Parser.DOT);
				this.state = 2072;
				this.match(Java8Parser.NEW);
				this.state = 2074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2073;
					this.typeArguments();
					}
				}

				this.state = 2079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 2076;
					this.annotation();
					}
					}
					this.state = 2081;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2082;
				this.match(Java8Parser.Identifier);
				this.state = 2084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2083;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2086;
				this.match(Java8Parser.LPAREN);
				this.state = 2088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2087;
					this.argumentList();
					}
				}

				this.state = 2090;
				this.match(Java8Parser.RPAREN);
				this.state = 2092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LBRACE) {
					{
					this.state = 2091;
					this.classBody();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2094;
				this.primary();
				this.state = 2095;
				this.match(Java8Parser.DOT);
				this.state = 2096;
				this.match(Java8Parser.NEW);
				this.state = 2098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2097;
					this.typeArguments();
					}
				}

				this.state = 2103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 2100;
					this.annotation();
					}
					}
					this.state = 2105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2106;
				this.match(Java8Parser.Identifier);
				this.state = 2108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2107;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2110;
				this.match(Java8Parser.LPAREN);
				this.state = 2112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2111;
					this.argumentList();
					}
				}

				this.state = 2114;
				this.match(Java8Parser.RPAREN);
				this.state = 2116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LBRACE) {
					{
					this.state = 2115;
					this.classBody();
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
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lf_primaryContext = new ClassInstanceCreationExpression_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, Java8Parser.RULE_classInstanceCreationExpression_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2120;
			this.match(Java8Parser.DOT);
			this.state = 2121;
			this.match(Java8Parser.NEW);
			this.state = 2123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 2122;
				this.typeArguments();
				}
			}

			this.state = 2128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 2125;
				this.annotation();
				}
				}
				this.state = 2130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2131;
			this.match(Java8Parser.Identifier);
			this.state = 2133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 2132;
				this.typeArgumentsOrDiamond();
				}
			}

			this.state = 2135;
			this.match(Java8Parser.LPAREN);
			this.state = 2137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 2136;
				this.argumentList();
				}
			}

			this.state = 2139;
			this.match(Java8Parser.RPAREN);
			this.state = 2141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,227,this._ctx) ) {
			case 1:
				{
				this.state = 2140;
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
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lfno_primaryContext = new ClassInstanceCreationExpression_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, Java8Parser.RULE_classInstanceCreationExpression_lfno_primary);
		let _la: number;
		try {
			this.state = 2202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2143;
				this.match(Java8Parser.NEW);
				this.state = 2145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2144;
					this.typeArguments();
					}
				}

				this.state = 2150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 2147;
					this.annotation();
					}
					}
					this.state = 2152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2153;
				this.match(Java8Parser.Identifier);
				this.state = 2164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.DOT) {
					{
					{
					this.state = 2154;
					this.match(Java8Parser.DOT);
					this.state = 2158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===Java8Parser.AT) {
						{
						{
						this.state = 2155;
						this.annotation();
						}
						}
						this.state = 2160;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2161;
					this.match(Java8Parser.Identifier);
					}
					}
					this.state = 2166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2167;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2170;
				this.match(Java8Parser.LPAREN);
				this.state = 2172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2171;
					this.argumentList();
					}
				}

				this.state = 2174;
				this.match(Java8Parser.RPAREN);
				this.state = 2176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,234,this._ctx) ) {
				case 1:
					{
					this.state = 2175;
					this.classBody();
					}
					break;
				}
				}
				break;
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2178;
				this.expressionName();
				this.state = 2179;
				this.match(Java8Parser.DOT);
				this.state = 2180;
				this.match(Java8Parser.NEW);
				this.state = 2182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2181;
					this.typeArguments();
					}
				}

				this.state = 2187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.AT) {
					{
					{
					this.state = 2184;
					this.annotation();
					}
					}
					this.state = 2189;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2190;
				this.match(Java8Parser.Identifier);
				this.state = 2192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2191;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2194;
				this.match(Java8Parser.LPAREN);
				this.state = 2196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2195;
					this.argumentList();
					}
				}

				this.state = 2198;
				this.match(Java8Parser.RPAREN);
				this.state = 2200;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,239,this._ctx) ) {
				case 1:
					{
					this.state = 2199;
					this.classBody();
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
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, Java8Parser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,241,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2204;
				this.typeArguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2205;
				this.match(Java8Parser.LT);
				this.state = 2206;
				this.match(Java8Parser.GT);
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
	public fieldAccess(): FieldAccessContext {
		let _localctx: FieldAccessContext = new FieldAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, Java8Parser.RULE_fieldAccess);
		try {
			this.state = 2222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,242,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2209;
				this.primary();
				this.state = 2210;
				this.match(Java8Parser.DOT);
				this.state = 2211;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2213;
				this.match(Java8Parser.SUPER);
				this.state = 2214;
				this.match(Java8Parser.DOT);
				this.state = 2215;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2216;
				this.typeName();
				this.state = 2217;
				this.match(Java8Parser.DOT);
				this.state = 2218;
				this.match(Java8Parser.SUPER);
				this.state = 2219;
				this.match(Java8Parser.DOT);
				this.state = 2220;
				this.match(Java8Parser.Identifier);
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
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext {
		let _localctx: FieldAccess_lf_primaryContext = new FieldAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, Java8Parser.RULE_fieldAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2224;
			this.match(Java8Parser.DOT);
			this.state = 2225;
			this.match(Java8Parser.Identifier);
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
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext {
		let _localctx: FieldAccess_lfno_primaryContext = new FieldAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, Java8Parser.RULE_fieldAccess_lfno_primary);
		try {
			this.state = 2236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2227;
				this.match(Java8Parser.SUPER);
				this.state = 2228;
				this.match(Java8Parser.DOT);
				this.state = 2229;
				this.match(Java8Parser.Identifier);
				}
				break;
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2230;
				this.typeName();
				this.state = 2231;
				this.match(Java8Parser.DOT);
				this.state = 2232;
				this.match(Java8Parser.SUPER);
				this.state = 2233;
				this.match(Java8Parser.DOT);
				this.state = 2234;
				this.match(Java8Parser.Identifier);
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
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, Java8Parser.RULE_arrayAccess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,244,this._ctx) ) {
			case 1:
				{
				this.state = 2238;
				this.expressionName();
				this.state = 2239;
				this.match(Java8Parser.LBRACK);
				this.state = 2240;
				this.expression();
				this.state = 2241;
				this.match(Java8Parser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 2243;
				this.primaryNoNewArray_lfno_arrayAccess();
				this.state = 2244;
				this.match(Java8Parser.LBRACK);
				this.state = 2245;
				this.expression();
				this.state = 2246;
				this.match(Java8Parser.RBRACK);
				}
				break;
			}
			this.state = 2257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.LBRACK) {
				{
				{
				this.state = 2250;
				this.primaryNoNewArray_lf_arrayAccess();
				this.state = 2251;
				this.match(Java8Parser.LBRACK);
				this.state = 2252;
				this.expression();
				this.state = 2253;
				this.match(Java8Parser.RBRACK);
				}
				}
				this.state = 2259;
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
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext {
		let _localctx: ArrayAccess_lf_primaryContext = new ArrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, Java8Parser.RULE_arrayAccess_lf_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2260;
			this.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary();
			this.state = 2261;
			this.match(Java8Parser.LBRACK);
			this.state = 2262;
			this.expression();
			this.state = 2263;
			this.match(Java8Parser.RBRACK);
			}
			this.state = 2272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,246,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2265;
					this.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary();
					this.state = 2266;
					this.match(Java8Parser.LBRACK);
					this.state = 2267;
					this.expression();
					this.state = 2268;
					this.match(Java8Parser.RBRACK);
					}
					} 
				}
				this.state = 2274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,246,this._ctx);
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
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext {
		let _localctx: ArrayAccess_lfno_primaryContext = new ArrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, Java8Parser.RULE_arrayAccess_lfno_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,247,this._ctx) ) {
			case 1:
				{
				this.state = 2275;
				this.expressionName();
				this.state = 2276;
				this.match(Java8Parser.LBRACK);
				this.state = 2277;
				this.expression();
				this.state = 2278;
				this.match(Java8Parser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 2280;
				this.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary();
				this.state = 2281;
				this.match(Java8Parser.LBRACK);
				this.state = 2282;
				this.expression();
				this.state = 2283;
				this.match(Java8Parser.RBRACK);
				}
				break;
			}
			this.state = 2294;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,248,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2287;
					this.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary();
					this.state = 2288;
					this.match(Java8Parser.LBRACK);
					this.state = 2289;
					this.expression();
					this.state = 2290;
					this.match(Java8Parser.RBRACK);
					}
					} 
				}
				this.state = 2296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,248,this._ctx);
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
	public methodInvocation(): MethodInvocationContext {
		let _localctx: MethodInvocationContext = new MethodInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, Java8Parser.RULE_methodInvocation);
		let _la: number;
		try {
			this.state = 2365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,260,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2297;
				this.methodName();
				this.state = 2298;
				this.match(Java8Parser.LPAREN);
				this.state = 2300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2299;
					this.argumentList();
					}
				}

				this.state = 2302;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2304;
				this.typeName();
				this.state = 2305;
				this.match(Java8Parser.DOT);
				this.state = 2307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2306;
					this.typeArguments();
					}
				}

				this.state = 2309;
				this.match(Java8Parser.Identifier);
				this.state = 2310;
				this.match(Java8Parser.LPAREN);
				this.state = 2312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2311;
					this.argumentList();
					}
				}

				this.state = 2314;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2316;
				this.expressionName();
				this.state = 2317;
				this.match(Java8Parser.DOT);
				this.state = 2319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2318;
					this.typeArguments();
					}
				}

				this.state = 2321;
				this.match(Java8Parser.Identifier);
				this.state = 2322;
				this.match(Java8Parser.LPAREN);
				this.state = 2324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2323;
					this.argumentList();
					}
				}

				this.state = 2326;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2328;
				this.primary();
				this.state = 2329;
				this.match(Java8Parser.DOT);
				this.state = 2331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2330;
					this.typeArguments();
					}
				}

				this.state = 2333;
				this.match(Java8Parser.Identifier);
				this.state = 2334;
				this.match(Java8Parser.LPAREN);
				this.state = 2336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2335;
					this.argumentList();
					}
				}

				this.state = 2338;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2340;
				this.match(Java8Parser.SUPER);
				this.state = 2341;
				this.match(Java8Parser.DOT);
				this.state = 2343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2342;
					this.typeArguments();
					}
				}

				this.state = 2345;
				this.match(Java8Parser.Identifier);
				this.state = 2346;
				this.match(Java8Parser.LPAREN);
				this.state = 2348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2347;
					this.argumentList();
					}
				}

				this.state = 2350;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2351;
				this.typeName();
				this.state = 2352;
				this.match(Java8Parser.DOT);
				this.state = 2353;
				this.match(Java8Parser.SUPER);
				this.state = 2354;
				this.match(Java8Parser.DOT);
				this.state = 2356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2355;
					this.typeArguments();
					}
				}

				this.state = 2358;
				this.match(Java8Parser.Identifier);
				this.state = 2359;
				this.match(Java8Parser.LPAREN);
				this.state = 2361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2360;
					this.argumentList();
					}
				}

				this.state = 2363;
				this.match(Java8Parser.RPAREN);
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
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext {
		let _localctx: MethodInvocation_lf_primaryContext = new MethodInvocation_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, Java8Parser.RULE_methodInvocation_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2367;
			this.match(Java8Parser.DOT);
			this.state = 2369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 2368;
				this.typeArguments();
				}
			}

			this.state = 2371;
			this.match(Java8Parser.Identifier);
			this.state = 2372;
			this.match(Java8Parser.LPAREN);
			this.state = 2374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
				{
				this.state = 2373;
				this.argumentList();
				}
			}

			this.state = 2376;
			this.match(Java8Parser.RPAREN);
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
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext {
		let _localctx: MethodInvocation_lfno_primaryContext = new MethodInvocation_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, Java8Parser.RULE_methodInvocation_lfno_primary);
		let _la: number;
		try {
			this.state = 2434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,272,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2378;
				this.methodName();
				this.state = 2379;
				this.match(Java8Parser.LPAREN);
				this.state = 2381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2380;
					this.argumentList();
					}
				}

				this.state = 2383;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2385;
				this.typeName();
				this.state = 2386;
				this.match(Java8Parser.DOT);
				this.state = 2388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2387;
					this.typeArguments();
					}
				}

				this.state = 2390;
				this.match(Java8Parser.Identifier);
				this.state = 2391;
				this.match(Java8Parser.LPAREN);
				this.state = 2393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2392;
					this.argumentList();
					}
				}

				this.state = 2395;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2397;
				this.expressionName();
				this.state = 2398;
				this.match(Java8Parser.DOT);
				this.state = 2400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2399;
					this.typeArguments();
					}
				}

				this.state = 2402;
				this.match(Java8Parser.Identifier);
				this.state = 2403;
				this.match(Java8Parser.LPAREN);
				this.state = 2405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2404;
					this.argumentList();
					}
				}

				this.state = 2407;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2409;
				this.match(Java8Parser.SUPER);
				this.state = 2410;
				this.match(Java8Parser.DOT);
				this.state = 2412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2411;
					this.typeArguments();
					}
				}

				this.state = 2414;
				this.match(Java8Parser.Identifier);
				this.state = 2415;
				this.match(Java8Parser.LPAREN);
				this.state = 2417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2416;
					this.argumentList();
					}
				}

				this.state = 2419;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2420;
				this.typeName();
				this.state = 2421;
				this.match(Java8Parser.DOT);
				this.state = 2422;
				this.match(Java8Parser.SUPER);
				this.state = 2423;
				this.match(Java8Parser.DOT);
				this.state = 2425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2424;
					this.typeArguments();
					}
				}

				this.state = 2427;
				this.match(Java8Parser.Identifier);
				this.state = 2428;
				this.match(Java8Parser.LPAREN);
				this.state = 2430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2429;
					this.argumentList();
					}
				}

				this.state = 2432;
				this.match(Java8Parser.RPAREN);
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
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, Java8Parser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2436;
			this.expression();
			this.state = 2441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 2437;
				this.match(Java8Parser.COMMA);
				this.state = 2438;
				this.expression();
				}
				}
				this.state = 2443;
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
	public methodReference(): MethodReferenceContext {
		let _localctx: MethodReferenceContext = new MethodReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, Java8Parser.RULE_methodReference);
		let _la: number;
		try {
			this.state = 2491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,280,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2444;
				this.expressionName();
				this.state = 2445;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2446;
					this.typeArguments();
					}
				}

				this.state = 2449;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2451;
				this.referenceType();
				this.state = 2452;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2453;
					this.typeArguments();
					}
				}

				this.state = 2456;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2458;
				this.primary();
				this.state = 2459;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2460;
					this.typeArguments();
					}
				}

				this.state = 2463;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2465;
				this.match(Java8Parser.SUPER);
				this.state = 2466;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2467;
					this.typeArguments();
					}
				}

				this.state = 2470;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2471;
				this.typeName();
				this.state = 2472;
				this.match(Java8Parser.DOT);
				this.state = 2473;
				this.match(Java8Parser.SUPER);
				this.state = 2474;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2475;
					this.typeArguments();
					}
				}

				this.state = 2478;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2480;
				this.classType();
				this.state = 2481;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2482;
					this.typeArguments();
					}
				}

				this.state = 2485;
				this.match(Java8Parser.NEW);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2487;
				this.arrayType();
				this.state = 2488;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2489;
				this.match(Java8Parser.NEW);
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
	public methodReference_lf_primary(): MethodReference_lf_primaryContext {
		let _localctx: MethodReference_lf_primaryContext = new MethodReference_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, Java8Parser.RULE_methodReference_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2493;
			this.match(Java8Parser.COLONCOLON);
			this.state = 2495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Java8Parser.LT) {
				{
				this.state = 2494;
				this.typeArguments();
				}
			}

			this.state = 2497;
			this.match(Java8Parser.Identifier);
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
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext {
		let _localctx: MethodReference_lfno_primaryContext = new MethodReference_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, Java8Parser.RULE_methodReference_lfno_primary);
		let _la: number;
		try {
			this.state = 2539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,287,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2499;
				this.expressionName();
				this.state = 2500;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2501;
					this.typeArguments();
					}
				}

				this.state = 2504;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2506;
				this.referenceType();
				this.state = 2507;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2508;
					this.typeArguments();
					}
				}

				this.state = 2511;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2513;
				this.match(Java8Parser.SUPER);
				this.state = 2514;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2515;
					this.typeArguments();
					}
				}

				this.state = 2518;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2519;
				this.typeName();
				this.state = 2520;
				this.match(Java8Parser.DOT);
				this.state = 2521;
				this.match(Java8Parser.SUPER);
				this.state = 2522;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2523;
					this.typeArguments();
					}
				}

				this.state = 2526;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2528;
				this.classType();
				this.state = 2529;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Java8Parser.LT) {
					{
					this.state = 2530;
					this.typeArguments();
					}
				}

				this.state = 2533;
				this.match(Java8Parser.NEW);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2535;
				this.arrayType();
				this.state = 2536;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2537;
				this.match(Java8Parser.NEW);
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
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		let _localctx: ArrayCreationExpressionContext = new ArrayCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, Java8Parser.RULE_arrayCreationExpression);
		try {
			this.state = 2563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,290,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2541;
				this.match(Java8Parser.NEW);
				this.state = 2542;
				this.primitiveType();
				this.state = 2543;
				this.dimExprs();
				this.state = 2545;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,288,this._ctx) ) {
				case 1:
					{
					this.state = 2544;
					this.dims();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2547;
				this.match(Java8Parser.NEW);
				this.state = 2548;
				this.classOrInterfaceType();
				this.state = 2549;
				this.dimExprs();
				this.state = 2551;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,289,this._ctx) ) {
				case 1:
					{
					this.state = 2550;
					this.dims();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2553;
				this.match(Java8Parser.NEW);
				this.state = 2554;
				this.primitiveType();
				this.state = 2555;
				this.dims();
				this.state = 2556;
				this.arrayInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2558;
				this.match(Java8Parser.NEW);
				this.state = 2559;
				this.classOrInterfaceType();
				this.state = 2560;
				this.dims();
				this.state = 2561;
				this.arrayInitializer();
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
	public dimExprs(): DimExprsContext {
		let _localctx: DimExprsContext = new DimExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, Java8Parser.RULE_dimExprs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2565;
			this.dimExpr();
			this.state = 2569;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,291,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2566;
					this.dimExpr();
					}
					} 
				}
				this.state = 2571;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,291,this._ctx);
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
	public dimExpr(): DimExprContext {
		let _localctx: DimExprContext = new DimExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, Java8Parser.RULE_dimExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.AT) {
				{
				{
				this.state = 2572;
				this.annotation();
				}
				}
				this.state = 2577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2578;
			this.match(Java8Parser.LBRACK);
			this.state = 2579;
			this.expression();
			this.state = 2580;
			this.match(Java8Parser.RBRACK);
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
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, Java8Parser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2582;
			this.expression();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, Java8Parser.RULE_expression);
		try {
			this.state = 2586;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,293,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2584;
				this.lambdaExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2585;
				this.assignmentExpression();
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
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, Java8Parser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2588;
			this.lambdaParameters();
			this.state = 2589;
			this.match(Java8Parser.ARROW);
			this.state = 2590;
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
		this.enterRule(_localctx, 418, Java8Parser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 2602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,295,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2592;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2593;
				this.match(Java8Parser.LPAREN);
				this.state = 2595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la===Java8Parser.SHORT || _la===Java8Parser.Identifier || _la===Java8Parser.AT) {
					{
					this.state = 2594;
					this.formalParameterList();
					}
				}

				this.state = 2597;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2598;
				this.match(Java8Parser.LPAREN);
				this.state = 2599;
				this.inferredFormalParameterList();
				this.state = 2600;
				this.match(Java8Parser.RPAREN);
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
	public inferredFormalParameterList(): InferredFormalParameterListContext {
		let _localctx: InferredFormalParameterListContext = new InferredFormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, Java8Parser.RULE_inferredFormalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2604;
			this.match(Java8Parser.Identifier);
			this.state = 2609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Java8Parser.COMMA) {
				{
				{
				this.state = 2605;
				this.match(Java8Parser.COMMA);
				this.state = 2606;
				this.match(Java8Parser.Identifier);
				}
				}
				this.state = 2611;
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
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, Java8Parser.RULE_lambdaBody);
		try {
			this.state = 2614;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.BANG:
			case Java8Parser.TILDE:
			case Java8Parser.INC:
			case Java8Parser.DEC:
			case Java8Parser.ADD:
			case Java8Parser.SUB:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2612;
				this.expression();
				}
				break;
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2613;
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
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, Java8Parser.RULE_assignmentExpression);
		try {
			this.state = 2618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,298,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2616;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2617;
				this.assignment();
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, Java8Parser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2620;
			this.leftHandSide();
			this.state = 2621;
			this.assignmentOperator();
			this.state = 2622;
			this.expression();
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
	public leftHandSide(): LeftHandSideContext {
		let _localctx: LeftHandSideContext = new LeftHandSideContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, Java8Parser.RULE_leftHandSide);
		try {
			this.state = 2627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,299,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2624;
				this.expressionName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2625;
				this.fieldAccess();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2626;
				this.arrayAccess();
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
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, Java8Parser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2629;
			_la = this._input.LA(1);
			if ( !(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Java8Parser.ASSIGN - 66)) | (1 << (Java8Parser.ADD_ASSIGN - 66)) | (1 << (Java8Parser.SUB_ASSIGN - 66)) | (1 << (Java8Parser.MUL_ASSIGN - 66)) | (1 << (Java8Parser.DIV_ASSIGN - 66)) | (1 << (Java8Parser.AND_ASSIGN - 66)) | (1 << (Java8Parser.OR_ASSIGN - 66)) | (1 << (Java8Parser.XOR_ASSIGN - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (Java8Parser.MOD_ASSIGN - 98)) | (1 << (Java8Parser.LSHIFT_ASSIGN - 98)) | (1 << (Java8Parser.RSHIFT_ASSIGN - 98)) | (1 << (Java8Parser.URSHIFT_ASSIGN - 98)))) !== 0)) ) {
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
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, Java8Parser.RULE_conditionalExpression);
		try {
			this.state = 2638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,300,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2631;
				this.conditionalOrExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2632;
				this.conditionalOrExpression(0);
				this.state = 2633;
				this.match(Java8Parser.QUESTION);
				this.state = 2634;
				this.expression();
				this.state = 2635;
				this.match(Java8Parser.COLON);
				this.state = 2636;
				this.conditionalExpression();
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

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	@RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = _localctx;
		let _startState: number = 434;
		this.enterRecursionRule(_localctx, 434, Java8Parser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2641;
			this.conditionalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,301,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_conditionalOrExpression);
					this.state = 2643;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2644;
					this.match(Java8Parser.OR);
					this.state = 2645;
					this.conditionalAndExpression(0);
					}
					} 
				}
				this.state = 2650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,301,this._ctx);
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

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	@RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = _localctx;
		let _startState: number = 436;
		this.enterRecursionRule(_localctx, 436, Java8Parser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2652;
			this.inclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2659;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,302,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_conditionalAndExpression);
					this.state = 2654;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2655;
					this.match(Java8Parser.AND);
					this.state = 2656;
					this.inclusiveOrExpression(0);
					}
					} 
				}
				this.state = 2661;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,302,this._ctx);
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

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	@RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = _localctx;
		let _startState: number = 438;
		this.enterRecursionRule(_localctx, 438, Java8Parser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2663;
			this.exclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2670;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,303,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_inclusiveOrExpression);
					this.state = 2665;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2666;
					this.match(Java8Parser.BITOR);
					this.state = 2667;
					this.exclusiveOrExpression(0);
					}
					} 
				}
				this.state = 2672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,303,this._ctx);
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

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	@RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = _localctx;
		let _startState: number = 440;
		this.enterRecursionRule(_localctx, 440, Java8Parser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2674;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2681;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,304,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_exclusiveOrExpression);
					this.state = 2676;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2677;
					this.match(Java8Parser.CARET);
					this.state = 2678;
					this.andExpression(0);
					}
					} 
				}
				this.state = 2683;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,304,this._ctx);
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

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	@RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 442;
		this.enterRecursionRule(_localctx, 442, Java8Parser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2685;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2692;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,305,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_andExpression);
					this.state = 2687;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 2688;
					this.match(Java8Parser.BITAND);
					this.state = 2689;
					this.equalityExpression(0);
					}
					} 
				}
				this.state = 2694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,305,this._ctx);
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

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	@RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 444;
		this.enterRecursionRule(_localctx, 444, Java8Parser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2696;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2706;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,307,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2704;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,306,this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_equalityExpression);
						this.state = 2698;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2699;
						this.match(Java8Parser.EQUAL);
						this.state = 2700;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_equalityExpression);
						this.state = 2701;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2702;
						this.match(Java8Parser.NOTEQUAL);
						this.state = 2703;
						this.relationalExpression(0);
						}
						break;
					}
					} 
				}
				this.state = 2708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,307,this._ctx);
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

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	@RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 446;
		this.enterRecursionRule(_localctx, 446, Java8Parser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2710;
			this.shiftExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2729;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,309,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2727;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,308,this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2712;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 2713;
						this.match(Java8Parser.LT);
						this.state = 2714;
						this.shiftExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2715;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 2716;
						this.match(Java8Parser.GT);
						this.state = 2717;
						this.shiftExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2718;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 2719;
						this.match(Java8Parser.LE);
						this.state = 2720;
						this.shiftExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2721;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2722;
						this.match(Java8Parser.GE);
						this.state = 2723;
						this.shiftExpression(0);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2724;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2725;
						this.match(Java8Parser.INSTANCEOF);
						this.state = 2726;
						this.referenceType();
						}
						break;
					}
					} 
				}
				this.state = 2731;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,309,this._ctx);
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

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	@RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = _localctx;
		let _startState: number = 448;
		this.enterRecursionRule(_localctx, 448, Java8Parser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2733;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2750;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,311,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2748;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,310,this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2735;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 2736;
						this.match(Java8Parser.LT);
						this.state = 2737;
						this.match(Java8Parser.LT);
						this.state = 2738;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2739;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2740;
						this.match(Java8Parser.GT);
						this.state = 2741;
						this.match(Java8Parser.GT);
						this.state = 2742;
						this.additiveExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2743;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2744;
						this.match(Java8Parser.GT);
						this.state = 2745;
						this.match(Java8Parser.GT);
						this.state = 2746;
						this.match(Java8Parser.GT);
						this.state = 2747;
						this.additiveExpression(0);
						}
						break;
					}
					} 
				}
				this.state = 2752;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,311,this._ctx);
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

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	@RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 450;
		this.enterRecursionRule(_localctx, 450, Java8Parser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2754;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2764;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,313,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2762;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,312,this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_additiveExpression);
						this.state = 2756;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2757;
						this.match(Java8Parser.ADD);
						this.state = 2758;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_additiveExpression);
						this.state = 2759;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2760;
						this.match(Java8Parser.SUB);
						this.state = 2761;
						this.multiplicativeExpression(0);
						}
						break;
					}
					} 
				}
				this.state = 2766;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,313,this._ctx);
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

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	@RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 452;
		this.enterRecursionRule(_localctx, 452, Java8Parser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2768;
			this.unaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2781;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,315,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2779;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,314,this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2770;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 2771;
						this.match(Java8Parser.MUL);
						this.state = 2772;
						this.unaryExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2773;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2774;
						this.match(Java8Parser.DIV);
						this.state = 2775;
						this.unaryExpression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2776;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2777;
						this.match(Java8Parser.MOD);
						this.state = 2778;
						this.unaryExpression();
						}
						break;
					}
					} 
				}
				this.state = 2783;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,315,this._ctx);
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
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, Java8Parser.RULE_unaryExpression);
		try {
			this.state = 2791;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.INC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2784;
				this.preIncrementExpression();
				}
				break;
			case Java8Parser.DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2785;
				this.preDecrementExpression();
				}
				break;
			case Java8Parser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2786;
				this.match(Java8Parser.ADD);
				this.state = 2787;
				this.unaryExpression();
				}
				break;
			case Java8Parser.SUB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2788;
				this.match(Java8Parser.SUB);
				this.state = 2789;
				this.unaryExpression();
				}
				break;
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.BANG:
			case Java8Parser.TILDE:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2790;
				this.unaryExpressionNotPlusMinus();
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
	public preIncrementExpression(): PreIncrementExpressionContext {
		let _localctx: PreIncrementExpressionContext = new PreIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, Java8Parser.RULE_preIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2793;
			this.match(Java8Parser.INC);
			this.state = 2794;
			this.unaryExpression();
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
	public preDecrementExpression(): PreDecrementExpressionContext {
		let _localctx: PreDecrementExpressionContext = new PreDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, Java8Parser.RULE_preDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2796;
			this.match(Java8Parser.DEC);
			this.state = 2797;
			this.unaryExpression();
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
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let _localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, Java8Parser.RULE_unaryExpressionNotPlusMinus);
		try {
			this.state = 2805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,317,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2799;
				this.postfixExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2800;
				this.match(Java8Parser.TILDE);
				this.state = 2801;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2802;
				this.match(Java8Parser.BANG);
				this.state = 2803;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2804;
				this.castExpression();
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
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, Java8Parser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,318,this._ctx) ) {
			case 1:
				{
				this.state = 2807;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 2808;
				this.expressionName();
				}
				break;
			}
			this.state = 2815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,320,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 2813;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Java8Parser.INC:
						{
						this.state = 2811;
						this.postIncrementExpression_lf_postfixExpression();
						}
						break;
					case Java8Parser.DEC:
						{
						this.state = 2812;
						this.postDecrementExpression_lf_postfixExpression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 2817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,320,this._ctx);
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
	public postIncrementExpression(): PostIncrementExpressionContext {
		let _localctx: PostIncrementExpressionContext = new PostIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, Java8Parser.RULE_postIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2818;
			this.postfixExpression();
			this.state = 2819;
			this.match(Java8Parser.INC);
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
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext {
		let _localctx: PostIncrementExpression_lf_postfixExpressionContext = new PostIncrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, Java8Parser.RULE_postIncrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2821;
			this.match(Java8Parser.INC);
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
	public postDecrementExpression(): PostDecrementExpressionContext {
		let _localctx: PostDecrementExpressionContext = new PostDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, Java8Parser.RULE_postDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2823;
			this.postfixExpression();
			this.state = 2824;
			this.match(Java8Parser.DEC);
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
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext {
		let _localctx: PostDecrementExpression_lf_postfixExpressionContext = new PostDecrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, Java8Parser.RULE_postDecrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2826;
			this.match(Java8Parser.DEC);
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
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, Java8Parser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 2855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,323,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2828;
				this.match(Java8Parser.LPAREN);
				this.state = 2829;
				this.primitiveType();
				this.state = 2830;
				this.match(Java8Parser.RPAREN);
				this.state = 2831;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2833;
				this.match(Java8Parser.LPAREN);
				this.state = 2834;
				this.referenceType();
				this.state = 2838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.BITAND) {
					{
					{
					this.state = 2835;
					this.additionalBound();
					}
					}
					this.state = 2840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2841;
				this.match(Java8Parser.RPAREN);
				this.state = 2842;
				this.unaryExpressionNotPlusMinus();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2844;
				this.match(Java8Parser.LPAREN);
				this.state = 2845;
				this.referenceType();
				this.state = 2849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Java8Parser.BITAND) {
					{
					{
					this.state = 2846;
					this.additionalBound();
					}
					}
					this.state = 2851;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2852;
				this.match(Java8Parser.RPAREN);
				this.state = 2853;
				this.lambdaExpression();
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 26:
			return this.packageName_sempred(_localctx as PackageNameContext, predIndex);

		case 28:
			return this.packageOrTypeName_sempred(_localctx as PackageOrTypeNameContext, predIndex);

		case 31:
			return this.ambiguousName_sempred(_localctx as AmbiguousNameContext, predIndex);

		case 217:
			return this.conditionalOrExpression_sempred(_localctx as ConditionalOrExpressionContext, predIndex);

		case 218:
			return this.conditionalAndExpression_sempred(_localctx as ConditionalAndExpressionContext, predIndex);

		case 219:
			return this.inclusiveOrExpression_sempred(_localctx as InclusiveOrExpressionContext, predIndex);

		case 220:
			return this.exclusiveOrExpression_sempred(_localctx as ExclusiveOrExpressionContext, predIndex);

		case 221:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 222:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 223:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 224:
			return this.shiftExpression_sempred(_localctx as ShiftExpressionContext, predIndex);

		case 225:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 226:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);
		}
		return true;
	}
	private packageName_sempred(_localctx: PackageNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private packageOrTypeName_sempred(_localctx: PackageOrTypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private ambiguousName_sempred(_localctx: AmbiguousNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalOrExpression_sempred(_localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalAndExpression_sempred(_localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(_localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(_localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(_localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 3);

		case 16:
			return this.precpred(this._ctx, 2);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 2);

		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 3);

		case 21:
			return this.precpred(this._ctx, 2);

		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03m\u0B2C\x04\x02"+
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04"+
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04"+
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04"+
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81"+
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86"+
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B"+
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90"+
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95"+
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A"+
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F"+
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4"+
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9"+
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE"+
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3"+
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8"+
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD"+
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2"+
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7"+
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC"+
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1"+
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6"+
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB"+
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0"+
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5"+
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA"+
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x03\x02\x03\x02"+
		"\x03\x03\x03\x03\x05\x03\u01E1\n\x03\x03\x04\x07\x04\u01E4\n\x04\f\x04"+
		"\x0E\x04\u01E7\v\x04\x03\x04\x03\x04\x07\x04\u01EB\n\x04\f\x04\x0E\x04"+
		"\u01EE\v\x04\x03\x04\x05\x04\u01F1\n\x04\x03\x05\x03\x05\x05\x05\u01F5"+
		"\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u01FE\n"+
		"\b\x03\t\x03\t\x05\t\u0202\n\t\x03\t\x03\t\x07\t\u0206\n\t\f\t\x0E\t\u0209"+
		"\v\t\x03\n\x07\n\u020C\n\n\f\n\x0E\n\u020F\v\n\x03\n\x03\n\x05\n\u0213"+
		"\n\n\x03\n\x03\n\x03\n\x07\n\u0218\n\n\f\n\x0E\n\u021B\v\n\x03\n\x03\n"+
		"\x05\n\u021F\n\n\x05\n\u0221\n\n\x03\v\x03\v\x07\v\u0225\n\v\f\v\x0E\v"+
		"\u0228\v\v\x03\v\x03\v\x05\v\u022C\n\v\x03\f\x07\f\u022F\n\f\f\f\x0E\f"+
		"\u0232\v\f\x03\f\x03\f\x05\f\u0236\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03"+
		"\x0F\x03\x0F\x03\x10\x07\x10\u023F\n\x10\f\x10\x0E\x10\u0242\v\x10\x03"+
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x05\x11\u024F\n\x11\x03\x12\x07\x12\u0252\n\x12\f\x12\x0E"+
		"\x12\u0255\v\x12\x03\x12\x03\x12\x03\x12\x07\x12\u025A\n\x12\f\x12\x0E"+
		"\x12\u025D\v\x12\x03\x12\x03\x12\x07\x12\u0261\n\x12\f\x12\x0E\x12\u0264"+
		"\v\x12\x03\x13\x07\x13\u0267\n\x13\f\x13\x0E\x13\u026A\v\x13\x03\x13\x03"+
		"\x13\x05\x13\u026E\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x07\x15\u0277\n\x15\f\x15\x0E\x15\u027A\v\x15\x05\x15\u027C\n"+
		"\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03"+
		"\x18\x03\x18\x07\x18\u0288\n\x18\f\x18\x0E\x18\u028B\v\x18\x03\x19\x03"+
		"\x19\x05\x19\u028F\n\x19\x03\x1A\x07\x1A\u0292\n\x1A\f\x1A\x0E\x1A\u0295"+
		"\v\x1A\x03\x1A\x03\x1A\x05\x1A\u0299\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03"+
		"\x1B\x05\x1B\u029F\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x07\x1C\u02A7\n\x1C\f\x1C\x0E\x1C\u02AA\v\x1C\x03\x1D\x03\x1D\x03\x1D"+
		"\x03\x1D\x03\x1D\x05\x1D\u02B1\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03"+
		"\x1E\x03\x1E\x07\x1E\u02B9\n\x1E\f\x1E\x0E\x1E\u02BC\v\x1E\x03\x1F\x03"+
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02C3\n\x1F\x03 \x03 \x03!\x03!\x03"+
		"!\x03!\x03!\x03!\x07!\u02CD\n!\f!\x0E!\u02D0\v!\x03\"\x05\"\u02D3\n\""+
		"\x03\"\x07\"\u02D6\n\"\f\"\x0E\"\u02D9\v\"\x03\"\x07\"\u02DC\n\"\f\"\x0E"+
		"\"\u02DF\v\"\x03\"\x03\"\x03#\x07#\u02E4\n#\f#\x0E#\u02E7\v#\x03#\x03"+
		"#\x03#\x03#\x07#\u02ED\n#\f#\x0E#\u02F0\v#\x03#\x03#\x03$\x03$\x03%\x03"+
		"%\x03%\x03%\x05%\u02FA\n%\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'"+
		"\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03"+
		")\x03)\x03)\x03*\x03*\x03*\x05*\u0317\n*\x03+\x03+\x05+\u031B\n+\x03,"+
		"\x07,\u031E\n,\f,\x0E,\u0321\v,\x03,\x03,\x03,\x05,\u0326\n,\x03,\x05"+
		",\u0329\n,\x03,\x05,\u032C\n,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-"+
		"\x03-\x03-\x05-\u0338\n-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x07/\u0341"+
		"\n/\f/\x0E/\u0344\v/\x030\x030\x030\x031\x031\x031\x032\x032\x032\x07"+
		"2\u034F\n2\f2\x0E2\u0352\v2\x033\x033\x073\u0356\n3\f3\x0E3\u0359\v3\x03"+
		"3\x033\x034\x034\x034\x034\x054\u0361\n4\x035\x035\x035\x035\x035\x05"+
		"5\u0368\n5\x036\x076\u036B\n6\f6\x0E6\u036E\v6\x036\x036\x036\x036\x03"+
		"7\x037\x037\x037\x037\x037\x037\x037\x057\u037C\n7\x038\x038\x038\x07"+
		"8\u0381\n8\f8\x0E8\u0384\v8\x039\x039\x039\x059\u0389\n9\x03:\x03:\x05"+
		":\u038D\n:\x03;\x03;\x05;\u0391\n;\x03<\x03<\x05<\u0395\n<\x03=\x03=\x05"+
		"=\u0399\n=\x03>\x03>\x03>\x05>\u039E\n>\x03?\x03?\x05?\u03A2\n?\x03?\x03"+
		"?\x07?\u03A6\n?\f?\x0E?\u03A9\v?\x03@\x03@\x05@\u03AD\n@\x03@\x03@\x03"+
		"@\x07@\u03B2\n@\f@\x0E@\u03B5\v@\x03@\x03@\x05@\u03B9\n@\x05@\u03BB\n"+
		"@\x03A\x03A\x07A\u03BF\nA\fA\x0EA\u03C2\vA\x03A\x03A\x05A\u03C6\nA\x03"+
		"B\x03B\x05B\u03CA\nB\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03G\x03"+
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03DD\nG\x03H\x07H\u03E0\nH"+
		"\fH\x0EH\u03E3\vH\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03"+
		"I\x03I\x03I\x05I\u03F2\nI\x03J\x03J\x03J\x05J\u03F7\nJ\x03J\x03J\x07J"+
		"\u03FB\nJ\fJ\x0EJ\u03FE\vJ\x03J\x03J\x03J\x05J\u0403\nJ\x05J\u0405\nJ"+
		"\x03K\x03K\x05K\u0409\nK\x03L\x03L\x03L\x05L\u040E\nL\x03L\x03L\x05L\u0412"+
		"\nL\x03M\x03M\x03M\x03M\x03M\x05M\u0419\nM\x03N\x03N\x03N\x07N\u041E\n"+
		"N\fN\x0EN\u0421\vN\x03N\x03N\x03N\x07N\u0426\nN\fN\x0EN\u0429\vN\x05N"+
		"\u042B\nN\x03O\x07O\u042E\nO\fO\x0EO\u0431\vO\x03O\x03O\x03O\x03P\x03"+
		"P\x05P\u0438\nP\x03Q\x07Q\u043B\nQ\fQ\x0EQ\u043E\vQ\x03Q\x03Q\x07Q\u0442"+
		"\nQ\fQ\x0EQ\u0445\vQ\x03Q\x03Q\x03Q\x03Q\x05Q\u044B\nQ\x03R\x07R\u044E"+
		"\nR\fR\x0ER\u0451\vR\x03R\x03R\x03R\x05R\u0456\nR\x03R\x03R\x03S\x03S"+
		"\x03S\x03T\x03T\x03T\x07T\u0460\nT\fT\x0ET\u0463\vT\x03U\x03U\x05U\u0467"+
		"\nU\x03V\x03V\x05V\u046B\nV\x03W\x03W\x03X\x03X\x03X\x03Y\x07Y\u0473\n"+
		"Y\fY\x0EY\u0476\vY\x03Y\x03Y\x05Y\u047A\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x03"+
		"Z\x05Z\u0482\nZ\x03[\x05[\u0485\n[\x03[\x03[\x03[\x05[\u048A\n[\x03[\x03"+
		"[\x03\\\x03\\\x03]\x03]\x05]\u0492\n]\x03]\x05]\u0495\n]\x03]\x03]\x03"+
		"^\x05^\u049A\n^\x03^\x03^\x03^\x05^\u049F\n^\x03^\x03^\x03^\x05^\u04A4"+
		"\n^\x03^\x03^\x03^\x05^\u04A9\n^\x03^\x03^\x03^\x03^\x03^\x05^\u04B0\n"+
		"^\x03^\x03^\x03^\x05^\u04B5\n^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u04BD"+
		"\n^\x03^\x03^\x03^\x05^\u04C2\n^\x03^\x03^\x03^\x05^\u04C7\n^\x03_\x07"+
		"_\u04CA\n_\f_\x0E_\u04CD\v_\x03_\x03_\x03_\x05_\u04D2\n_\x03_\x03_\x03"+
		"`\x03`\x05`\u04D8\n`\x03`\x05`\u04DB\n`\x03`\x05`\u04DE\n`\x03`\x03`\x03"+
		"a\x03a\x03a\x07a\u04E5\na\fa\x0Ea\u04E8\va\x03b\x07b\u04EB\nb\fb\x0Eb"+
		"\u04EE\vb\x03b\x03b\x03b\x05b\u04F3\nb\x03b\x05b\u04F6\nb\x03b\x05b\u04F9"+
		"\nb\x03c\x03c\x03d\x03d\x07d\u04FF\nd\fd\x0Ed\u0502\vd\x03e\x03e\x05e"+
		"\u0506\ne\x03f\x07f\u0509\nf\ff\x0Ef\u050C\vf\x03f\x03f\x03f\x05f\u0511"+
		"\nf\x03f\x05f\u0514\nf\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05"+
		"g\u051F\ng\x03h\x03h\x03h\x03i\x03i\x07i\u0526\ni\fi\x0Ei\u0529\vi\x03"+
		"i\x03i\x03j\x03j\x03j\x03j\x03j\x05j\u0532\nj\x03k\x07k\u0535\nk\fk\x0E"+
		"k\u0538\vk\x03k\x03k\x03k\x03k\x03l\x03l\x03l\x03l\x05l\u0542\nl\x03m"+
		"\x07m\u0545\nm\fm\x0Em\u0548\vm\x03m\x03m\x03m\x03n\x03n\x03n\x03n\x03"+
		"n\x03n\x05n\u0553\nn\x03o\x07o\u0556\no\fo\x0Eo\u0559\vo\x03o\x03o\x03"+
		"o\x03o\x03o\x03p\x03p\x07p\u0562\np\fp\x0Ep\u0565\vp\x03p\x03p\x03q\x03"+
		"q\x03q\x03q\x03q\x05q\u056E\nq\x03r\x07r\u0571\nr\fr\x0Er\u0574\vr\x03"+
		"r\x03r\x03r\x03r\x03r\x05r\u057B\nr\x03r\x05r\u057E\nr\x03r\x03r\x03s"+
		"\x03s\x03s\x05s\u0585\ns\x03t\x03t\x03t\x03u\x03u\x03u\x05u\u058D\nu\x03"+
		"v\x03v\x03v\x03v\x05v\u0593\nv\x03v\x03v\x03w\x03w\x03w\x07w\u059A\nw"+
		"\fw\x0Ew\u059D\vw\x03x\x03x\x03x\x03x\x03y\x03y\x03y\x05y\u05A6\ny\x03"+
		"z\x03z\x05z\u05AA\nz\x03z\x05z\u05AD\nz\x03z\x03z\x03{\x03{\x03{\x07{"+
		"\u05B4\n{\f{\x0E{\u05B7\v{\x03|\x03|\x03|\x03}\x03}\x03}\x03}\x03}\x03"+
		"}\x03~\x03~\x05~\u05C4\n~\x03~\x05~\u05C7\n~\x03~\x03~\x03\x7F\x03\x7F"+
		"\x03\x7F\x07\x7F\u05CE\n\x7F\f\x7F\x0E\x7F\u05D1\v\x7F\x03\x80\x03\x80"+
		"\x05\x80\u05D5\n\x80\x03\x80\x03\x80\x03\x81\x03\x81\x07\x81\u05DB\n\x81"+
		"\f\x81\x0E\x81\u05DE\v\x81\x03\x82\x03\x82\x03\x82\x05\x82\u05E3\n\x82"+
		"\x03\x83\x03\x83\x03\x83\x03\x84\x07\x84\u05E9\n\x84\f\x84\x0E\x84\u05EC"+
		"\v\x84\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85"+
		"\x03\x85\x05\x85\u05F7\n\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05"+
		"\x86\u05FE\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87"+
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u060C\n\x87\x03\x88\x03"+
		"\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03"+
		"\x8B\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03"+
		"\x8C\x05\x8C\u0622\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D"+
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F"+
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90"+
		"\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x05\x90"+
		"\u0644\n\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x92\x03"+
		"\x92\x07\x92\u064E\n\x92\f\x92\x0E\x92\u0651\v\x92\x03\x92\x07\x92\u0654"+
		"\n\x92\f\x92\x0E\x92\u0657\v\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03\x93"+
		"\x03\x94\x03\x94\x07\x94\u0660\n\x94\f\x94\x0E\x94\u0663\v\x94\x03\x95"+
		"\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95"+
		"\x05\x95\u066F\n\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03"+
		"\x97\x03\x97\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x99\x03"+
		"\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x03\x9A\x05"+
		"\x9A\u0689\n\x9A\x03\x9B\x03\x9B\x05\x9B\u068D\n\x9B\x03\x9C\x03\x9C\x03"+
		"\x9C\x05\x9C\u0692\n\x9C\x03\x9C\x03\x9C\x05\x9C\u0696\n\x9C\x03\x9C\x03"+
		"\x9C\x05\x9C\u069A\n\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D"+
		"\x05\x9D\u06A2\n\x9D\x03\x9D\x03\x9D\x05\x9D\u06A6\n\x9D\x03\x9D\x03\x9D"+
		"\x05\x9D\u06AA\n\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x05\x9E\u06B1"+
		"\n\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u06B8\n\xA0\f\xA0"+
		"\x0E\xA0\u06BB\v\xA0\x03\xA1\x03\xA1\x03\xA1\x07\xA1\u06C0\n\xA1\f\xA1"+
		"\x0E\xA1\u06C3\v\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03"+
		"\xA1\x03\xA2\x03\xA2\x03\xA2\x07\xA2\u06CF\n\xA2\f\xA2\x0E\xA2\u06D2\v"+
		"\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA3\x03"+
		"\xA3\x05\xA3\u06DD\n\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x05\xA4\u06E3"+
		"\n\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x05\xA5\u06E9\n\xA5\x03\xA5\x03"+
		"\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03"+
		"\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05"+
		"\xA8\u06FE\n\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u0703\n\xA8\x03\xA9\x03"+
		"\xA9\x07\xA9\u0707\n\xA9\f\xA9\x0E\xA9\u070A\v\xA9\x03\xAA\x03\xAA\x03"+
		"\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAB\x07\xAB\u0713\n\xAB\f\xAB\x0E\xAB"+
		"\u0716\v\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAC\x07\xAC\u071E"+
		"\n\xAC\f\xAC\x0E\xAC\u0721\v\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE"+
		"\x03\xAE\x03\xAE\x05\xAE\u072A\n\xAE\x03\xAE\x05\xAE\u072D\n\xAE\x03\xAF"+
		"\x03\xAF\x03\xAF\x05\xAF\u0732\n\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03"+
		"\xB0\x07\xB0\u0739\n\xB0\f\xB0\x0E\xB0\u073C\v\xB0\x03\xB1\x07\xB1\u073F"+
		"\n\xB1\f\xB1\x0E\xB1\u0742\v\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1"+
		"\x03\xB2\x03\xB2\x05\xB2\u074B\n\xB2\x03\xB2\x07\xB2\u074E\n\xB2\f\xB2"+
		"\x0E\xB2\u0751\v\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x07\xB3\u0757\n\xB3"+
		"\f\xB3\x0E\xB3\u075A\v\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03"+
		"\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03"+
		"\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u0770\n\xB3\x03\xB4"+
		"\x03\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x07\xB5\u0778\n\xB5\f\xB5\x0E"+
		"\xB5\u077B\v\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5"+
		"\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5"+
		"\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u0790\n\xB5\x03\xB6\x03\xB6\x03\xB6\x03"+
		"\xB6\x03\xB6\x05\xB6\u0797\n\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB8"+
		"\x03\xB8\x05\xB8\u079F\n\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x07\xB9\u07A5"+
		"\n\xB9\f\xB9\x0E\xB9\u07A8\v\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9"+
		"\x03\xB9\x07\xB9\u07B0\n\xB9\f\xB9\x0E\xB9\u07B3\v\xB9\x03\xB9\x03\xB9"+
		"\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9"+
		"\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9"+
		"\x05\xB9\u07C9\n\xB9\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x07"+
		"\xBB\u07D1\n\xBB\f\xBB\x0E\xBB\u07D4\v\xBB\x03\xBB\x03\xBB\x03\xBB\x03"+
		"\xBB\x03\xBB\x03\xBB\x07\xBB\u07DC\n\xBB\f\xBB\x0E\xBB\u07DF\v\xBB\x03"+
		"\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03"+
		"\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03"+
		"\xBB\x05\xBB\u07F4\n\xBB\x03\xBC\x03\xBC\x05\xBC\u07F8\n\xBC\x03\xBC\x07"+
		"\xBC\u07FB\n\xBC\f\xBC\x0E\xBC\u07FE\v\xBC\x03\xBC\x03\xBC\x03\xBC\x07"+
		"\xBC\u0803\n\xBC\f\xBC\x0E\xBC\u0806\v\xBC\x03\xBC\x07\xBC\u0809\n\xBC"+
		"\f\xBC\x0E\xBC\u080C\v\xBC\x03\xBC\x05\xBC\u080F\n\xBC\x03\xBC\x03\xBC"+
		"\x05\xBC\u0813\n\xBC\x03\xBC\x03\xBC\x05\xBC\u0817\n\xBC\x03\xBC\x03\xBC"+
		"\x03\xBC\x03\xBC\x05\xBC\u081D\n\xBC\x03\xBC\x07\xBC\u0820\n\xBC\f\xBC"+
		"\x0E\xBC\u0823\v\xBC\x03\xBC\x03\xBC\x05\xBC\u0827\n\xBC\x03\xBC\x03\xBC"+
		"\x05\xBC\u082B\n\xBC\x03\xBC\x03\xBC\x05\xBC\u082F\n\xBC\x03\xBC\x03\xBC"+
		"\x03\xBC\x03\xBC\x05\xBC\u0835\n\xBC\x03\xBC\x07\xBC\u0838\n\xBC\f\xBC"+
		"\x0E\xBC\u083B\v\xBC\x03\xBC\x03\xBC\x05\xBC\u083F\n\xBC\x03\xBC\x03\xBC"+
		"\x05\xBC\u0843\n\xBC\x03\xBC\x03\xBC\x05\xBC\u0847\n\xBC\x05\xBC\u0849"+
		"\n\xBC\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u084E\n\xBD\x03\xBD\x07\xBD\u0851"+
		"\n\xBD\f\xBD\x0E\xBD\u0854\v\xBD\x03\xBD\x03\xBD\x05\xBD\u0858\n\xBD\x03"+
		"\xBD\x03\xBD\x05\xBD\u085C\n\xBD\x03\xBD\x03\xBD\x05\xBD\u0860\n\xBD\x03"+
		"\xBE\x03\xBE\x05\xBE\u0864\n\xBE\x03\xBE\x07\xBE\u0867\n\xBE\f\xBE\x0E"+
		"\xBE\u086A\v\xBE\x03\xBE\x03\xBE\x03\xBE\x07\xBE\u086F\n\xBE\f\xBE\x0E"+
		"\xBE\u0872\v\xBE\x03\xBE\x07\xBE\u0875\n\xBE\f\xBE\x0E\xBE\u0878\v\xBE"+
		"\x03\xBE\x05\xBE\u087B\n\xBE\x03\xBE\x03\xBE\x05\xBE\u087F\n\xBE\x03\xBE"+
		"\x03\xBE\x05\xBE\u0883\n\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u0889"+
		"\n\xBE\x03\xBE\x07\xBE\u088C\n\xBE\f\xBE\x0E\xBE\u088F\v\xBE\x03\xBE\x03"+
		"\xBE\x05\xBE\u0893\n\xBE\x03\xBE\x03\xBE\x05\xBE\u0897\n\xBE\x03\xBE\x03"+
		"\xBE\x05\xBE\u089B\n\xBE\x05\xBE\u089D\n\xBE\x03\xBF\x03\xBF\x03\xBF\x05"+
		"\xBF\u08A2\n\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0"+
		"\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u08B1\n\xC0\x03"+
		"\xC1\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03"+
		"\xC2\x03\xC2\x03\xC2\x05\xC2\u08BF\n\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC3"+
		"\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x05\xC3\u08CB\n\xC3\x03"+
		"\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x07\xC3\u08D2\n\xC3\f\xC3\x0E\xC3"+
		"\u08D5\v\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03"+
		"\xC4\x03\xC4\x03\xC4\x07\xC4\u08E1\n\xC4\f\xC4\x0E\xC4\u08E4\v\xC4\x03"+
		"\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03"+
		"\xC5\x05\xC5\u08F0\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x07\xC5"+
		"\u08F7\n\xC5\f\xC5\x0E\xC5\u08FA\v\xC5\x03\xC6\x03\xC6\x03\xC6\x05\xC6"+
		"\u08FF\n\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u0906\n\xC6"+
		"\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u090B\n\xC6\x03\xC6\x03\xC6\x03\xC6\x03"+
		"\xC6\x03\xC6\x05\xC6\u0912\n\xC6\x03\xC6\x03\xC6\x03\xC6\x05";
	private static readonly _serializedATNSegment1: string =
		"\xC6\u0917\n\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u091E"+
		"\n\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u0923\n\xC6\x03\xC6\x03\xC6\x03"+
		"\xC6\x03\xC6\x03\xC6\x05\xC6\u092A\n\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6"+
		"\u092F\n\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u0937"+
		"\n\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u093C\n\xC6\x03\xC6\x03\xC6\x05"+
		"\xC6\u0940\n\xC6\x03\xC7\x03\xC7\x05\xC7\u0944\n\xC7\x03\xC7\x03\xC7\x03"+
		"\xC7\x05\xC7\u0949\n\xC7\x03\xC7\x03\xC7\x03\xC8\x03\xC8\x03\xC8\x05\xC8"+
		"\u0950\n\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x05\xC8\u0957\n\xC8"+
		"\x03\xC8\x03\xC8\x03\xC8\x05\xC8\u095C\n\xC8\x03\xC8\x03\xC8\x03\xC8\x03"+
		"\xC8\x03\xC8\x05\xC8\u0963\n\xC8\x03\xC8\x03\xC8\x03\xC8\x05\xC8\u0968"+
		"\n\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x05\xC8\u096F\n\xC8\x03"+
		"\xC8\x03\xC8\x03\xC8\x05\xC8\u0974\n\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8"+
		"\x03\xC8\x03\xC8\x05\xC8\u097C\n\xC8\x03\xC8\x03\xC8\x03\xC8\x05\xC8\u0981"+
		"\n\xC8\x03\xC8\x03\xC8\x05\xC8\u0985\n\xC8\x03\xC9\x03\xC9\x03\xC9\x07"+
		"\xC9\u098A\n\xC9\f\xC9\x0E\xC9\u098D\v\xC9\x03\xCA\x03\xCA\x03\xCA\x05"+
		"\xCA\u0992\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u0999"+
		"\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u09A0\n\xCA\x03"+
		"\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u09A7\n\xCA\x03\xCA\x03\xCA"+
		"\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u09AF\n\xCA\x03\xCA\x03\xCA\x03"+
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u09B6\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA"+
		"\x03\xCA\x03\xCA\x05\xCA\u09BE\n\xCA\x03\xCB\x03\xCB\x05\xCB\u09C2\n\xCB"+
		"\x03\xCB\x03\xCB\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u09C9\n\xCC\x03\xCC\x03"+
		"\xCC\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u09D0\n\xCC\x03\xCC\x03\xCC\x03\xCC"+
		"\x03\xCC\x03\xCC\x05\xCC\u09D7\n\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03"+
		"\xCC\x03\xCC\x05\xCC\u09DF\n\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC"+
		"\x05\xCC\u09E6\n\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x05"+
		"\xCC\u09EE\n\xCC\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u09F4\n\xCD\x03"+
		"\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u09FA\n\xCD\x03\xCD\x03\xCD\x03\xCD"+
		"\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u0A06"+
		"\n\xCD\x03\xCE\x03\xCE\x07\xCE\u0A0A\n\xCE\f\xCE\x0E\xCE\u0A0D\v\xCE\x03"+
		"\xCF\x07\xCF\u0A10\n\xCF\f\xCF\x0E\xCF\u0A13\v\xCF\x03\xCF\x03\xCF\x03"+
		"\xCF\x03\xCF\x03\xD0\x03\xD0\x03\xD1\x03\xD1\x05\xD1\u0A1D\n\xD1\x03\xD2"+
		"\x03\xD2\x03\xD2\x03\xD2\x03\xD3\x03\xD3\x03\xD3\x05\xD3\u0A26\n\xD3\x03"+
		"\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x05\xD3\u0A2D\n\xD3\x03\xD4\x03\xD4"+
		"\x03\xD4\x07\xD4\u0A32\n\xD4\f\xD4\x0E\xD4\u0A35\v\xD4\x03\xD5\x03\xD5"+
		"\x05\xD5\u0A39\n\xD5\x03\xD6\x03\xD6\x05\xD6\u0A3D\n\xD6\x03\xD7\x03\xD7"+
		"\x03\xD7\x03\xD7\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u0A46\n\xD8\x03\xD9\x03"+
		"\xD9\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA\u0A51"+
		"\n\xDA\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x03\xDB\x07\xDB\u0A59\n"+
		"\xDB\f\xDB\x0E\xDB\u0A5C\v\xDB\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC"+
		"\x03\xDC\x07\xDC\u0A64\n\xDC\f\xDC\x0E\xDC\u0A67\v\xDC\x03\xDD\x03\xDD"+
		"\x03\xDD\x03\xDD\x03\xDD\x03\xDD\x07\xDD\u0A6F\n\xDD\f\xDD\x0E\xDD\u0A72"+
		"\v\xDD\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x07\xDE\u0A7A\n"+
		"\xDE\f\xDE\x0E\xDE\u0A7D\v\xDE\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF"+
		"\x03\xDF\x07\xDF\u0A85\n\xDF\f\xDF\x0E\xDF\u0A88\v\xDF\x03\xE0\x03\xE0"+
		"\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x07\xE0\u0A93"+
		"\n\xE0\f\xE0\x0E\xE0\u0A96\v\xE0\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1"+
		"\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1"+
		"\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x07\xE1\u0AAA\n\xE1\f\xE1\x0E\xE1\u0AAD"+
		"\v\xE1\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2"+
		"\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x07\xE2"+
		"\u0ABF\n\xE2\f\xE2\x0E\xE2\u0AC2\v\xE2\x03\xE3\x03\xE3\x03\xE3\x03\xE3"+
		"\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x07\xE3\u0ACD\n\xE3\f\xE3\x0E"+
		"\xE3\u0AD0\v\xE3\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4"+
		"\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x07\xE4\u0ADE\n\xE4\f\xE4\x0E"+
		"\xE4\u0AE1\v\xE4\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5"+
		"\x05\xE5\u0AEA\n\xE5\x03\xE6\x03\xE6\x03\xE6\x03\xE7\x03\xE7\x03\xE7\x03"+
		"\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x05\xE8\u0AF8\n\xE8\x03\xE9"+
		"\x03\xE9\x05\xE9\u0AFC\n\xE9\x03\xE9\x03\xE9\x07\xE9\u0B00\n\xE9\f\xE9"+
		"\x0E\xE9\u0B03\v\xE9\x03\xEA\x03\xEA\x03\xEA\x03\xEB\x03\xEB\x03\xEC\x03"+
		"\xEC\x03\xEC\x03\xED\x03\xED\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03"+
		"\xEE\x03\xEE\x03\xEE\x07\xEE\u0B17\n\xEE\f\xEE\x0E\xEE\u0B1A\v\xEE\x03"+
		"\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x03\xEE\x07\xEE\u0B22\n\xEE\f\xEE"+
		"\x0E\xEE\u0B25\v\xEE\x03\xEE\x03\xEE\x03\xEE\x05\xEE\u0B2A\n\xEE\x03\xEE"+
		"\x02\x02\x0F6:@\u01B4\u01B6\u01B8\u01BA\u01BC\u01BE\u01C0\u01C2\u01C4"+
		"\u01C6\xEF\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12"+
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&"+
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02"+
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02"+
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02"+
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02"+
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02"+
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02"+
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02"+
		"\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02"+
		"\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02"+
		"\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02"+
		"\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108"+
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116"+
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124"+
		"\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132"+
		"\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140"+
		"\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E"+
		"\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C"+
		"\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A"+
		"\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178"+
		"\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186"+
		"\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194"+
		"\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2"+
		"\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0"+
		"\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE"+
		"\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC"+
		"\x02\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA"+
		"\x02\x02\x06\x03\x025:\x07\x02\x07\x07\n\n\x1D\x1D\x1F\x1F\'\'\x04\x02"+
		"\x10\x10\x16\x16\x04\x02DD]g\u0C1D\x02\u01DC\x03\x02\x02\x02\x04\u01E0"+
		"\x03\x02\x02\x02\x06\u01F0\x03\x02\x02\x02\b\u01F4\x03\x02\x02\x02\n\u01F6"+
		"\x03\x02\x02\x02\f\u01F8\x03\x02\x02\x02\x0E\u01FD\x03\x02\x02\x02\x10"+
		"\u0201\x03\x02\x02\x02\x12\u0220\x03\x02\x02\x02\x14\u0222\x03\x02\x02"+
		"\x02\x16\u0230\x03\x02\x02\x02\x18\u0237\x03\x02\x02\x02\x1A\u0239\x03"+
		"\x02\x02\x02\x1C\u023B\x03\x02\x02\x02\x1E\u0240\x03\x02\x02\x02 \u024E"+
		"\x03\x02\x02\x02\"\u0253\x03\x02\x02\x02$\u0268\x03\x02\x02\x02&\u026F"+
		"\x03\x02\x02\x02(\u027B\x03\x02\x02\x02*\u027D\x03\x02\x02\x02,\u0280"+
		"\x03\x02\x02\x02.\u0284\x03\x02\x02\x020\u028E\x03\x02\x02\x022\u0293"+
		"\x03\x02\x02\x024\u029E\x03\x02\x02\x026\u02A0\x03\x02\x02\x028\u02B0"+
		"\x03\x02\x02\x02:\u02B2\x03\x02\x02\x02<\u02C2\x03\x02\x02\x02>\u02C4"+
		"\x03\x02\x02\x02@\u02C6\x03\x02\x02\x02B\u02D2\x03\x02\x02\x02D\u02E5"+
		"\x03\x02\x02\x02F\u02F3\x03\x02\x02\x02H\u02F9\x03\x02\x02\x02J\u02FB"+
		"\x03\x02\x02\x02L\u02FF\x03\x02\x02\x02N\u0305\x03\x02\x02\x02P\u030C"+
		"\x03\x02\x02\x02R\u0316\x03\x02\x02\x02T\u031A\x03\x02\x02\x02V\u031F"+
		"\x03\x02\x02\x02X\u0337\x03\x02\x02\x02Z\u0339\x03\x02\x02\x02\\\u033D"+
		"\x03\x02\x02\x02^\u0345\x03\x02\x02\x02`\u0348\x03\x02\x02\x02b\u034B"+
		"\x03\x02\x02\x02d\u0353\x03\x02\x02\x02f\u0360\x03\x02\x02\x02h\u0367"+
		"\x03\x02\x02\x02j\u036C\x03\x02\x02\x02l\u037B\x03\x02\x02\x02n\u037D"+
		"\x03\x02\x02\x02p\u0385\x03\x02\x02\x02r\u038A\x03\x02\x02\x02t\u0390"+
		"\x03\x02\x02\x02v\u0394\x03\x02\x02\x02x\u0398\x03\x02\x02\x02z\u039D"+
		"\x03\x02\x02\x02|\u03A1\x03\x02\x02\x02~\u03BA\x03\x02\x02\x02\x80\u03BC"+
		"\x03\x02\x02\x02\x82\u03C7\x03\x02\x02\x02\x84\u03CB\x03\x02\x02\x02\x86"+
		"\u03CD\x03\x02\x02\x02\x88\u03CF\x03\x02\x02\x02\x8A\u03D1\x03\x02\x02"+
		"\x02\x8C\u03DC\x03\x02\x02\x02\x8E\u03E1\x03\x02\x02\x02\x90\u03F1\x03"+
		"\x02\x02\x02\x92\u0404\x03\x02\x02\x02\x94\u0408\x03\x02\x02\x02\x96\u040A"+
		"\x03\x02\x02\x02\x98\u0418\x03\x02\x02\x02\x9A\u042A\x03\x02\x02\x02\x9C"+
		"\u042F\x03\x02\x02\x02\x9E\u0437\x03\x02\x02\x02\xA0\u044A\x03\x02\x02"+
		"\x02\xA2\u044F\x03\x02\x02\x02\xA4\u0459\x03\x02\x02\x02\xA6\u045C\x03"+
		"\x02\x02\x02\xA8\u0466\x03\x02\x02\x02\xAA\u046A\x03\x02\x02\x02\xAC\u046C"+
		"\x03\x02\x02\x02\xAE\u046E\x03\x02\x02\x02\xB0\u0474\x03\x02\x02\x02\xB2"+
		"\u0481\x03\x02\x02\x02\xB4\u0484\x03\x02\x02\x02\xB6\u048D\x03\x02\x02"+
		"\x02\xB8\u048F\x03\x02\x02\x02\xBA\u04C6\x03\x02\x02\x02\xBC\u04CB\x03"+
		"\x02\x02\x02\xBE\u04D5\x03\x02\x02\x02\xC0\u04E1\x03\x02\x02\x02\xC2\u04EC"+
		"\x03\x02\x02\x02\xC4\u04FA\x03\x02\x02\x02\xC6\u04FC\x03\x02\x02\x02\xC8"+
		"\u0505\x03\x02\x02\x02\xCA\u050A\x03\x02\x02\x02\xCC\u051E\x03\x02\x02"+
		"\x02\xCE\u0520\x03\x02\x02\x02\xD0\u0523\x03\x02\x02\x02\xD2\u0531\x03"+
		"\x02\x02\x02\xD4\u0536\x03\x02\x02\x02\xD6\u0541\x03\x02\x02\x02\xD8\u0546"+
		"\x03\x02\x02\x02\xDA\u0552\x03\x02\x02\x02\xDC\u0557\x03\x02\x02\x02\xDE"+
		"\u055F\x03\x02\x02\x02\xE0\u056D\x03\x02\x02\x02\xE2\u0572\x03\x02\x02"+
		"\x02\xE4\u0584\x03\x02\x02\x02\xE6\u0586\x03\x02\x02\x02\xE8\u058C\x03"+
		"\x02\x02\x02\xEA\u058E\x03\x02\x02\x02\xEC\u0596\x03\x02\x02\x02\xEE\u059E"+
		"\x03\x02\x02\x02\xF0\u05A5\x03\x02\x02\x02\xF2\u05A7\x03\x02\x02\x02\xF4"+
		"\u05B0\x03\x02\x02\x02\xF6\u05B8\x03\x02\x02\x02\xF8\u05BB\x03\x02\x02"+
		"\x02\xFA\u05C1\x03\x02\x02\x02\xFC\u05CA\x03\x02\x02\x02\xFE\u05D2\x03"+
		"\x02\x02\x02\u0100\u05D8\x03\x02\x02\x02\u0102\u05E2\x03\x02\x02\x02\u0104"+
		"\u05E4\x03\x02\x02\x02\u0106\u05EA\x03\x02\x02\x02\u0108\u05F6\x03\x02"+
		"\x02\x02\u010A\u05FD\x03\x02\x02\x02\u010C\u060B\x03\x02\x02\x02\u010E"+
		"\u060D\x03\x02\x02\x02\u0110\u060F\x03\x02\x02\x02\u0112\u0613\x03\x02"+
		"\x02\x02\u0114\u0617\x03\x02\x02\x02\u0116\u0621\x03\x02\x02\x02\u0118"+
		"\u0623\x03\x02\x02\x02\u011A\u0629\x03\x02\x02\x02\u011C\u0631\x03\x02"+
		"\x02\x02\u011E\u0643\x03\x02\x02\x02\u0120\u0645\x03\x02\x02\x02\u0122"+
		"\u064B\x03\x02\x02\x02\u0124\u065A\x03\x02\x02\x02\u0126\u065D\x03\x02"+
		"\x02\x02\u0128\u066E\x03\x02\x02\x02\u012A\u0670\x03\x02\x02\x02\u012C"+
		"\u0672\x03\x02\x02\x02\u012E\u0678\x03\x02\x02\x02\u0130\u067E\x03\x02"+
		"\x02\x02\u0132\u0688\x03\x02\x02\x02\u0134\u068C\x03\x02\x02\x02\u0136"+
		"\u068E\x03\x02\x02\x02\u0138\u069E\x03\x02\x02\x02\u013A\u06B0\x03\x02"+
		"\x02\x02\u013C\u06B2\x03\x02\x02\x02\u013E\u06B4\x03\x02\x02\x02\u0140"+
		"\u06BC\x03\x02\x02\x02\u0142\u06CB\x03\x02\x02\x02\u0144\u06DA\x03\x02"+
		"\x02\x02\u0146\u06E0\x03\x02\x02\x02\u0148\u06E6\x03\x02\x02\x02\u014A"+
		"\u06EC\x03\x02\x02\x02\u014C\u06F0\x03\x02\x02\x02\u014E\u0702\x03\x02"+
		"\x02\x02\u0150\u0704\x03\x02\x02\x02\u0152\u070B\x03\x02\x02\x02\u0154"+
		"\u0714\x03\x02\x02\x02\u0156\u071A\x03\x02\x02\x02\u0158\u0722\x03\x02"+
		"\x02\x02\u015A\u0725\x03\x02\x02\x02\u015C\u072E\x03\x02\x02\x02\u015E"+
		"\u0735\x03\x02\x02\x02\u0160\u0740\x03\x02\x02\x02\u0162\u074A\x03\x02"+
		"\x02\x02\u0164\u076F\x03\x02\x02\x02\u0166\u0771\x03\x02\x02\x02\u0168"+
		"\u078F\x03\x02\x02\x02\u016A\u0796\x03\x02\x02\x02\u016C\u0798\x03\x02"+
		"\x02\x02\u016E\u079E\x03\x02\x02\x02\u0170\u07C8\x03\x02\x02\x02\u0172"+
		"\u07CA\x03\x02\x02\x02\u0174\u07F3\x03\x02\x02\x02\u0176\u0848\x03\x02"+
		"\x02\x02\u0178\u084A\x03\x02\x02\x02\u017A\u089C\x03\x02\x02\x02\u017C"+
		"\u08A1\x03\x02\x02\x02\u017E\u08B0\x03\x02\x02\x02\u0180\u08B2\x03\x02"+
		"\x02\x02\u0182\u08BE\x03\x02\x02\x02\u0184\u08CA\x03\x02\x02\x02\u0186"+
		"\u08D6\x03\x02\x02\x02\u0188\u08EF\x03\x02\x02\x02\u018A\u093F\x03\x02"+
		"\x02\x02\u018C\u0941\x03\x02\x02\x02\u018E\u0984\x03\x02\x02\x02\u0190"+
		"\u0986\x03\x02\x02\x02\u0192\u09BD\x03\x02\x02\x02\u0194\u09BF\x03\x02"+
		"\x02\x02\u0196\u09ED\x03\x02\x02\x02\u0198\u0A05\x03\x02\x02\x02\u019A"+
		"\u0A07\x03\x02\x02\x02\u019C\u0A11\x03\x02\x02\x02\u019E\u0A18\x03\x02"+
		"\x02\x02\u01A0\u0A1C\x03\x02\x02\x02\u01A2\u0A1E\x03\x02\x02\x02\u01A4"+
		"\u0A2C\x03\x02\x02\x02\u01A6\u0A2E\x03\x02\x02\x02\u01A8\u0A38\x03\x02"+
		"\x02\x02\u01AA\u0A3C\x03\x02\x02\x02\u01AC\u0A3E\x03\x02\x02\x02\u01AE"+
		"\u0A45\x03\x02\x02\x02\u01B0\u0A47\x03\x02\x02\x02\u01B2\u0A50\x03\x02"+
		"\x02\x02\u01B4\u0A52\x03\x02\x02\x02\u01B6\u0A5D\x03\x02\x02\x02\u01B8"+
		"\u0A68\x03\x02\x02\x02\u01BA\u0A73\x03\x02\x02\x02\u01BC\u0A7E\x03\x02"+
		"\x02\x02\u01BE\u0A89\x03\x02\x02\x02\u01C0\u0A97\x03\x02\x02\x02\u01C2"+
		"\u0AAE\x03\x02\x02\x02\u01C4\u0AC3\x03\x02\x02\x02\u01C6\u0AD1\x03\x02"+
		"\x02\x02\u01C8\u0AE9\x03\x02\x02\x02\u01CA\u0AEB\x03\x02\x02\x02\u01CC"+
		"\u0AEE\x03\x02\x02\x02\u01CE\u0AF7\x03\x02\x02\x02\u01D0\u0AFB\x03\x02"+
		"\x02\x02\u01D2\u0B04\x03\x02\x02\x02\u01D4\u0B07\x03\x02\x02\x02\u01D6"+
		"\u0B09\x03\x02\x02\x02\u01D8\u0B0C\x03\x02\x02\x02\u01DA\u0B29\x03\x02"+
		"\x02\x02\u01DC\u01DD\t\x02\x02\x02\u01DD\x03\x03\x02\x02\x02\u01DE\u01E1"+
		"\x05\x06\x04\x02\u01DF\u01E1\x05\x0E\b\x02\u01E0\u01DE\x03\x02\x02\x02"+
		"\u01E0\u01DF\x03\x02\x02\x02\u01E1\x05\x03\x02\x02\x02\u01E2\u01E4\x05"+
		"\xE8u\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01E7\x03\x02\x02\x02\u01E5"+
		"\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E8\x03\x02"+
		"\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01F1\x05\b\x05\x02\u01E9\u01EB"+
		"\x05\xE8u\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02"+
		"\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03"+
		"\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F1\x07\x05\x02\x02\u01F0"+
		"\u01E5\x03\x02\x02\x02\u01F0\u01EC\x03\x02\x02\x02\u01F1\x07\x03\x02\x02"+
		"\x02\u01F2\u01F5\x05\n\x06\x02\u01F3\u01F5\x05\f\x07\x02\u01F4\u01F2\x03"+
		"\x02\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5\t\x03\x02\x02\x02\u01F6"+
		"\u01F7\t\x03\x02\x02\u01F7\v\x03\x02\x02\x02\u01F8\u01F9\t\x04\x02\x02"+
		"\u01F9\r\x03\x02\x02\x02\u01FA\u01FE\x05\x10\t\x02\u01FB\u01FE\x05\x1E"+
		"\x10\x02\u01FC\u01FE\x05 \x11\x02\u01FD\u01FA\x03\x02\x02\x02\u01FD\u01FB"+
		"\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\x0F\x03\x02\x02\x02"+
		"\u01FF\u0202\x05\x16\f\x02\u0200\u0202\x05\x1C\x0F\x02\u0201\u01FF\x03"+
		"\x02\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202\u0207\x03\x02\x02\x02\u0203"+
		"\u0206\x05\x14\v\x02\u0204\u0206\x05\x1A\x0E\x02\u0205\u0203\x03\x02\x02"+
		"\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205"+
		"\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\x11\x03\x02\x02\x02"+
		"\u0209\u0207\x03\x02\x02\x02\u020A\u020C\x05\xE8u\x02\u020B\u020A\x03"+
		"\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D"+
		"\u020E\x03\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020D\x03\x02"+
		"\x02\x02\u0210\u0212\x07h\x02\x02\u0211\u0213\x05,\x17\x02\u0212\u0211"+
		"\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0221\x03\x02\x02\x02"+
		"\u0214\u0215\x05\x10\t\x02\u0215\u0219\x07C\x02\x02\u0216\u0218\x05\xE8"+
		"u\x02\u0217\u0216\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219\u0217"+
		"\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02"+
		"\u021B\u0219\x03\x02\x02\x02\u021C\u021E\x07h\x02\x02\u021D\u021F\x05"+
		",\x17\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F"+
		"\u0221\x03\x02\x02\x02\u0220\u020D\x03\x02\x02\x02\u0220\u0214\x03\x02"+
		"\x02\x02\u0221\x13\x03\x02\x02\x02\u0222\u0226\x07C\x02\x02\u0223\u0225"+
		"\x05\xE8u\x02\u0224\u0223\x03\x02\x02\x02\u0225\u0228\x03\x02\x02\x02"+
		"\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0229\x03"+
		"\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022B\x07h\x02\x02\u022A"+
		"\u022C\x05,\x17\x02\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02"+
		"\x02\u022C\x15\x03\x02\x02\x02\u022D\u022F\x05\xE8u\x02\u022E\u022D\x03"+
		"\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230"+
		"\u0231\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0230\x03\x02"+
		"\x02\x02\u0233\u0235\x07h\x02\x02\u0234\u0236\x05,\x17\x02\u0235\u0234"+
		"\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\x17\x03\x02\x02\x02"+
		"\u0237\u0238\x05\x12\n\x02\u0238\x19\x03\x02\x02\x02\u0239\u023A\x05\x14"+
		"\v\x02\u023A\x1B\x03\x02\x02\x02\u023B\u023C\x05\x16\f\x02\u023C\x1D\x03"+
		"\x02\x02\x02\u023D\u023F\x05\xE8u\x02\u023E\u023D\x03\x02\x02\x02\u023F"+
		"\u0242\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02"+
		"\x02\x02\u0241\u0243\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243"+
		"\u0244\x07h\x02\x02\u0244\x1F\x03\x02\x02\x02\u0245\u0246\x05\x06\x04"+
		"\x02\u0246\u0247\x05\"\x12\x02\u0247\u024F\x03\x02\x02\x02\u0248\u0249"+
		"\x05\x10\t\x02\u0249\u024A\x05\"\x12\x02\u024A\u024F\x03\x02\x02\x02\u024B"+
		"\u024C\x05\x1E\x10\x02\u024C\u024D\x05\"\x12\x02\u024D\u024F\x03\x02\x02"+
		"\x02\u024E\u0245\x03\x02\x02\x02\u024E\u0248\x03\x02\x02\x02\u024E\u024B"+
		"\x03\x02\x02\x02\u024F!\x03\x02\x02\x02\u0250\u0252\x05\xE8u\x02\u0251"+
		"\u0250\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02"+
		"\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255"+
		"\u0253\x03\x02\x02\x02\u0256\u0257\x07?\x02\x02\u0257\u0262\x07@\x02\x02"+
		"\u0258\u025A\x05\xE8u\x02\u0259\u0258\x03\x02\x02\x02\u025A\u025D\x03"+
		"\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C"+
		"\u025E\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025E\u025F\x07?\x02"+
		"\x02\u025F\u0261\x07@\x02\x02\u0260\u025B\x03\x02\x02\x02\u0261\u0264"+
		"\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02"+
		"\u0263#\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0265\u0267\x05&\x14"+
		"\x02\u0266\u0265\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266"+
		"\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02"+
		"\u026A\u0268\x03\x02\x02\x02\u026B\u026D\x07h\x02\x02\u026C\u026E\x05"+
		"(\x15\x02\u026D\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E"+
		"%\x03\x02\x02\x02\u026F\u0270\x05\xE8u\x02\u0270\'\x03\x02\x02\x02\u0271"+
		"\u0272\x07\x13\x02\x02\u0272\u027C\x05\x1E\x10\x02\u0273\u0274\x07\x13"+
		"\x02\x02\u0274\u0278\x05\x10\t\x02\u0275\u0277\x05*\x16\x02\u0276\u0275"+
		"\x03\x02\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02"+
		"\u0278\u0279\x03\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03"+
		"\x02\x02\x02\u027B\u0271\x03\x02\x02\x02\u027B\u0273\x03\x02\x02\x02\u027C"+
		")\x03\x02\x02\x02\u027D\u027E\x07W\x02\x02\u027E\u027F\x05\x18\r\x02\u027F"+
		"+\x03\x02\x02\x02\u0280\u0281\x07F\x02\x02\u0281\u0282\x05.\x18\x02\u0282"+
		"\u0283\x07E\x02\x02\u0283-\x03\x02\x02\x02\u0284\u0289\x050\x19\x02\u0285"+
		"\u0286\x07B\x02\x02\u0286\u0288\x050\x19\x02\u0287\u0285\x03\x02\x02\x02"+
		"\u0288\u028B\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03"+
		"\x02\x02\x02\u028A/\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C"+
		"\u028F\x05\x0E\b\x02\u028D\u028F\x052\x1A\x02\u028E\u028C\x03\x02\x02"+
		"\x02\u028E\u028D\x03\x02\x02\x02\u028F1\x03\x02\x02\x02\u0290\u0292\x05"+
		"\xE8u\x02\u0291\u0290\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293"+
		"\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0296\x03\x02"+
		"\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296\u0298\x07I\x02\x02\u0297\u0299"+
		"\x054\x1B\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02"+
		"\u02993\x03\x02\x02\x02\u029A\u029B\x07\x13\x02\x02\u029B\u029F\x05\x0E"+
		"\b\x02\u029C\u029D\x07*\x02\x02\u029D\u029F\x05\x0E\b\x02\u029E\u029A"+
		"\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F5\x03\x02\x02\x02\u02A0"+
		"\u02A1\b\x1C\x01\x02\u02A1\u02A2\x07h\x02\x02\u02A2\u02A8\x03\x02\x02"+
		"\x02\u02A3\u02A4\f\x03\x02\x02\u02A4\u02A5\x07C\x02\x02\u02A5\u02A7\x07"+
		"h\x02\x02\u02A6\u02A3\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8"+
		"\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A97\x03\x02\x02"+
		"\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02B1\x07h\x02\x02\u02AC\u02AD"+
		"\x05:\x1E\x02\u02AD\u02AE\x07C\x02\x02\u02AE\u02AF\x07h\x02\x02\u02AF"+
		"\u02B1\x03\x02\x02\x02\u02B0\u02AB\x03\x02\x02\x02\u02B0\u02AC\x03\x02"+
		"\x02\x02\u02B19\x03\x02\x02\x02\u02B2\u02B3\b\x1E\x01\x02\u02B3\u02B4"+
		"\x07h\x02\x02\u02B4\u02BA\x03\x02\x02\x02\u02B5\u02B6\f\x03\x02\x02\u02B6"+
		"\u02B7\x07C\x02\x02\u02B7\u02B9\x07h\x02\x02\u02B8\u02B5\x03\x02\x02\x02"+
		"\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02BB\x03"+
		"\x02\x02\x02\u02BB;\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BD"+
		"\u02C3\x07h\x02\x02\u02BE\u02BF\x05@!\x02\u02BF\u02C0\x07C\x02\x02\u02C0"+
		"\u02C1\x07h\x02\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u02BD\x03\x02\x02"+
		"\x02\u02C2\u02BE\x03\x02\x02\x02\u02C3=\x03\x02\x02\x02\u02C4\u02C5\x07"+
		"h\x02\x02\u02C5?\x03\x02\x02\x02\u02C6\u02C7\b!\x01\x02\u02C7\u02C8\x07"+
		"h\x02\x02\u02C8\u02CE\x03\x02\x02\x02\u02C9\u02CA\f\x03\x02\x02\u02CA"+
		"\u02CB\x07C\x02\x02\u02CB\u02CD\x07h\x02\x02\u02CC\u02C9\x03\x02\x02\x02"+
		"\u02CD\u02D0\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03"+
		"\x02\x02\x02\u02CFA\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1"+
		"\u02D3\x05D#\x02\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02"+
		"\u02D3\u02D7\x03\x02\x02\x02\u02D4\u02D6\x05H%\x02\u02D5\u02D4\x03\x02"+
		"\x02\x02\u02D6\u02D9\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7"+
		"\u02D8\x03\x02\x02\x02\u02D8\u02DD\x03\x02\x02\x02\u02D9\u02D7\x03\x02"+
		"\x02\x02\u02DA\u02DC\x05R*\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DF"+
		"\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02"+
		"\u02DE\u02E0\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x07"+
		"\x02\x02\x03\u02E1C\x03\x02\x02\x02\u02E2\u02E4\x05F$\x02\u02E3\u02E2"+
		"\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02"+
		"\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7\u02E5\x03"+
		"\x02\x02\x02\u02E8\u02E9\x07\"\x02\x02\u02E9\u02EE\x07h\x02\x02\u02EA"+
		"\u02EB\x07C\x02\x02\u02EB\u02ED\x07h\x02\x02\u02EC\u02EA\x03\x02\x02\x02"+
		"\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x03\x02\x02\x02\u02F0\u02EE"+
		"\x03\x02\x02\x02\u02F1\u02F2\x07A\x02\x02\u02F2E\x03\x02\x02\x02\u02F3"+
		"\u02F4\x05\xE8u\x02\u02F4G\x03\x02\x02\x02\u02F5\u02FA\x05J&\x02\u02F6"+
		"\u02FA\x05L\'\x02\u02F7\u02FA\x05N(\x02\u02F8\u02FA\x05P)\x02\u02F9\u02F5"+
		"\x03\x02\x02\x02\u02F9\u02F6\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02"+
		"\u02F9\u02F8\x03\x02\x02\x02\u02FAI\x03\x02\x02\x02\u02FB\u02FC\x07\x1B"+
		"\x02\x02\u02FC\u02FD\x058\x1D\x02\u02FD\u02FE\x07A\x02\x02\u02FEK\x03"+
		"\x02\x02\x02\u02FF\u0300\x07\x1B\x02\x02\u0300\u0301\x05:\x1E\x02\u0301"+
		"\u0302\x07C\x02\x02\u0302\u0303\x07U\x02\x02\u0303\u0304\x07A\x02\x02"+
		"\u0304M\x03\x02\x02\x02\u0305\u0306\x07\x1B\x02\x02\u0306\u0307\x07(\x02"+
		"\x02\u0307\u0308\x058\x1D\x02\u0308\u0309\x07C\x02\x02\u0309\u030A\x07"+
		"h\x02\x02\u030A\u030B\x07A\x02\x02\u030BO\x03\x02\x02\x02\u030C\u030D"+
		"\x07\x1B\x02\x02\u030D\u030E\x07(\x02\x02\u030E\u030F\x058\x1D\x02\u030F"+
		"\u0310\x07C\x02\x02\u0310\u0311\x07U\x02\x02\u0311\u0312\x07A\x02\x02"+
		"\u0312Q\x03\x02\x02\x02\u0313\u0317\x05T+\x02\u0314\u0317\x05\xC8e\x02"+
		"\u0315\u0317\x07A\x02\x02\u0316\u0313\x03\x02\x02\x02\u0316\u0314\x03"+
		"\x02\x02\x02\u0316\u0315\x03\x02\x02\x02\u0317S\x03\x02\x02\x02\u0318"+
		"\u031B\x05V,\x02\u0319\u031B\x05\xBC_\x02\u031A\u0318\x03\x02\x02\x02"+
		"\u031A\u0319\x03\x02\x02\x02\u031BU\x03\x02\x02\x02\u031C\u031E\x05X-"+
		"\x02\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D"+
		"\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x03\x02\x02\x02"+
		"\u0321\u031F\x03\x02\x02\x02\u0322\u0323\x07\v\x02\x02\u0323\u0325\x07"+
		"h\x02\x02\u0324\u0326\x05Z.\x02\u0325\u0324\x03\x02\x02\x02\u0325\u0326"+
		"\x03\x02\x02\x02\u0326\u0328\x03\x02\x02\x02\u0327\u0329\x05^0\x02\u0328"+
		"\u0327\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x03\x02"+
		"\x02\x02\u032A\u032C\x05`1\x02\u032B\u032A\x03\x02\x02\x02\u032B\u032C"+
		"\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032E\x05d3\x02\u032E"+
		"W\x03\x02\x02\x02\u032F\u0338\x05\xE8u\x02\u0330\u0338\x07%\x02\x02\u0331"+
		"\u0338\x07$\x02\x02\u0332\u0338\x07#\x02\x02\u0333\u0338\x07\x03\x02\x02"+
		"\u0334\u0338\x07(\x02\x02\u0335\u0338\x07\x14\x02\x02\u0336\u0338\x07"+
		")\x02\x02\u0337\u032F\x03\x02\x02\x02\u0337\u0330\x03\x02\x02\x02\u0337"+
		"\u0331\x03\x02\x02\x02\u0337\u0332\x03\x02\x02\x02\u0337\u0333\x03\x02"+
		"\x02\x02\u0337\u0334\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337"+
		"\u0336\x03\x02\x02\x02\u0338Y\x03\x02\x02\x02\u0339\u033A\x07F\x02\x02"+
		"\u033A\u033B\x05\\/\x02\u033B\u033C\x07E\x02\x02\u033C[\x03\x02\x02\x02"+
		"\u033D\u0342\x05$\x13\x02\u033E\u033F\x07B\x02\x02\u033F\u0341\x05$\x13"+
		"\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342\u0340"+
		"\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343]\x03\x02\x02\x02\u0344"+
		"\u0342\x03\x02\x02\x02\u0345\u0346\x07\x13\x02\x02\u0346\u0347\x05\x12"+
		"\n\x02\u0347_\x03\x02\x02\x02\u0348\u0349\x07\x1A\x02\x02\u0349\u034A"+
		"\x05b2\x02\u034Aa\x03\x02\x02\x02\u034B\u0350\x05\x18\r\x02\u034C\u034D"+
		"\x07B\x02\x02\u034D\u034F\x05\x18\r\x02\u034E\u034C\x03\x02\x02\x02\u034F"+
		"\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02"+
		"\x02\x02\u0351c\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02\u0353\u0357"+
		"\x07=\x02\x02\u0354\u0356\x05f4\x02\u0355\u0354\x03\x02\x02\x02\u0356"+
		"\u0359\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0358\x03\x02"+
		"\x02\x02\u0358\u035A\x03\x02\x02\x02\u0359\u0357\x03\x02\x02\x02\u035A"+
		"\u035B\x07>\x02\x02\u035Be\x03\x02\x02\x02\u035C\u0361\x05h5\x02\u035D"+
		"\u0361\x05\xACW\x02\u035E\u0361\x05\xAEX\x02\u035F\u0361\x05\xB0Y\x02"+
		"\u0360\u035C\x03\x02\x02\x02\u0360\u035D\x03\x02\x02\x02\u0360\u035E\x03"+
		"\x02\x02\x02\u0360\u035F\x03\x02\x02\x02\u0361g\x03\x02\x02\x02\u0362"+
		"\u0368\x05j6\x02\u0363\u0368\x05\x8EH\x02\u0364\u0368\x05T+\x02\u0365"+
		"\u0368\x05\xC8e\x02\u0366\u0368\x07A\x02\x02\u0367\u0362\x03\x02\x02\x02"+
		"\u0367\u0363\x03\x02\x02\x02\u0367\u0364\x03\x02\x02\x02\u0367\u0365\x03"+
		"\x02\x02\x02\u0367\u0366\x03\x02\x02\x02\u0368i\x03\x02\x02\x02\u0369"+
		"\u036B\x05l7\x02\u036A\u0369\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02"+
		"\u036C\u036A\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036F\x03"+
		"\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0370\x05v<\x02\u0370\u0371"+
		"\x05n8\x02\u0371\u0372\x07A\x02\x02\u0372k\x03\x02\x02\x02\u0373\u037C"+
		"\x05\xE8u\x02\u0374\u037C\x07%\x02\x02\u0375\u037C\x07$\x02\x02\u0376"+
		"\u037C\x07#\x02\x02\u0377\u037C\x07(\x02\x02\u0378\u037C\x07\x14\x02\x02"+
		"\u0379\u037C\x070\x02\x02\u037A\u037C\x073\x02\x02\u037B\u0373\x03\x02"+
		"\x02\x02\u037B\u0374\x03\x02\x02\x02\u037B\u0375\x03\x02\x02\x02\u037B"+
		"\u0376\x03\x02\x02\x02\u037B\u0377\x03\x02\x02\x02\u037B\u0378\x03\x02"+
		"\x02\x02\u037B\u0379\x03\x02\x02\x02\u037B\u037A\x03\x02\x02\x02\u037C"+
		"m\x03\x02\x02\x02\u037D\u0382\x05p9\x02\u037E\u037F\x07B\x02\x02\u037F"+
		"\u0381\x05p9\x02\u0380\u037E\x03\x02\x02\x02\u0381\u0384\x03\x02\x02\x02"+
		"\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383o\x03\x02"+
		"\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385\u0388\x05r:\x02\u0386\u0387"+
		"\x07D\x02\x02\u0387\u0389\x05t;\x02\u0388\u0386\x03\x02\x02\x02\u0388"+
		"\u0389\x03\x02\x02\x02\u0389q\x03\x02\x02\x02\u038A\u038C\x07h\x02\x02"+
		"\u038B\u038D\x05\"\x12\x02\u038C\u038B\x03\x02\x02\x02\u038C\u038D\x03"+
		"\x02\x02\x02\u038Ds\x03\x02\x02\x02\u038E\u0391\x05\u01A0\xD1\x02\u038F"+
		"\u0391\x05\xFA~\x02\u0390\u038E\x03\x02\x02\x02\u0390\u038F\x03\x02\x02"+
		"\x02\u0391u\x03\x02\x02\x02\u0392\u0395\x05x=\x02\u0393\u0395\x05z>\x02"+
		"\u0394\u0392\x03\x02\x02\x02\u0394\u0393\x03\x02\x02\x02\u0395w\x03\x02"+
		"\x02\x02\u0396\u0399\x05\b\x05\x02\u0397\u0399\x07\x05\x02\x02\u0398\u0396"+
		"\x03\x02\x02\x02\u0398\u0397\x03\x02\x02\x02\u0399y\x03\x02\x02\x02\u039A"+
		"\u039E\x05|?\x02\u039B\u039E\x05\x8AF\x02\u039C\u039E\x05\x8CG\x02\u039D"+
		"\u039A\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039C\x03\x02"+
		"\x02\x02\u039E{\x03\x02\x02\x02\u039F\u03A2\x05\x82B\x02\u03A0\u03A2\x05"+
		"\x88E\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2"+
		"\u03A7\x03\x02\x02\x02\u03A3\u03A6\x05\x80A\x02\u03A4\u03A6\x05\x86D\x02"+
		"\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A9\x03"+
		"\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8"+
		"}\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA\u03AC\x07h\x02\x02"+
		"\u03AB\u03AD\x05,\x17\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD\x03"+
		"\x02\x02\x02\u03AD\u03BB\x03\x02\x02\x02\u03AE\u03AF\x05|?\x02\u03AF\u03B3"+
		"\x07C\x02\x02\u03B0\u03B2\x05\xE8u\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2"+
		"\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02"+
		"\x02\x02\u03B4\u03B6\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6"+
		"\u03B8\x07h\x02\x02\u03B7\u03B9\x05,\x17\x02\u03B8\u03B7\x03\x02\x02\x02"+
		"\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BB\x03\x02\x02\x02\u03BA\u03AA\x03"+
		"\x02\x02\x02\u03BA\u03AE\x03\x02\x02\x02\u03BB\x7F\x03\x02\x02\x02\u03BC"+
		"\u03C0\x07C\x02\x02\u03BD\u03BF\x05\xE8u\x02\u03BE\u03BD\x03\x02\x02\x02"+
		"\u03BF\u03C2\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1\x03"+
		"\x02\x02\x02\u03C1\u03C3\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3"+
		"\u03C5\x07h\x02\x02\u03C4\u03C6\x05,\x17\x02\u03C5\u03C4\x03\x02\x02\x02"+
		"\u03C5\u03C6\x03\x02\x02\x02\u03C6\x81\x03\x02\x02\x02\u03C7\u03C9\x07"+
		"h\x02\x02\u03C8\u03CA\x05,\x17\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA"+
		"\x03\x02\x02\x02\u03CA\x83\x03\x02\x02\x02\u03CB\u03CC\x05~@\x02\u03CC"+
		"\x85\x03\x02\x02\x02\u03CD\u03CE\x05\x80A\x02\u03CE\x87\x03\x02\x02\x02"+
		"\u03CF\u03D0\x05\x82B\x02\u03D0\x89\x03\x02\x02\x02\u03D1\u03D2\x07h\x02"+
		"\x02\u03D2\x8B\x03\x02\x02\x02\u03D3\u03D4\x05x=\x02\u03D4\u03D5\x05\""+
		"\x12\x02\u03D5\u03DD\x03\x02\x02\x02\u03D6\u03D7\x05|?\x02\u03D7\u03D8"+
		"\x05\"\x12\x02\u03D8\u03DD\x03\x02\x02\x02\u03D9\u03DA\x05\x8AF\x02\u03DA"+
		"\u03DB\x05\"\x12\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03D3\x03\x02\x02"+
		"\x02\u03DC\u03D6\x03\x02\x02\x02\u03DC\u03D9\x03\x02\x02\x02\u03DD\x8D"+
		"\x03\x02\x02\x02\u03DE\u03E0\x05\x90I\x02\u03DF\u03DE\x03\x02\x02\x02"+
		"\u03E0\u03E3\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E1\u03E2\x03"+
		"\x02\x02\x02\u03E2\u03E4\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02\u03E4"+
		"\u03E5\x05\x92J\x02\u03E5\u03E6\x05\xAAV\x02\u03E6\x8F\x03\x02\x02\x02"+
		"\u03E7\u03F2\x05\xE8u\x02\u03E8\u03F2\x07%\x02\x02\u03E9\u03F2\x07$\x02"+
		"\x02\u03EA\u03F2\x07#\x02\x02\u03EB\u03F2\x07\x03\x02\x02\u03EC\u03F2"+
		"\x07(\x02\x02\u03ED\u03F2\x07\x14\x02\x02\u03EE\u03F2\x07,\x02\x02\u03EF"+
		"\u03F2\x07 \x02\x02\u03F0\u03F2\x07)\x02\x02\u03F1\u03E7\x03\x02\x02\x02"+
		"\u03F1\u03E8\x03\x02\x02\x02\u03F1\u03E9\x03\x02\x02\x02\u03F1\u03EA\x03"+
		"\x02\x02\x02\u03F1\u03EB\x03\x02\x02\x02\u03F1\u03EC\x03\x02\x02\x02\u03F1"+
		"\u03ED\x03\x02\x02\x02\u03F1\u03EE\x03\x02\x02\x02\u03F1\u03EF\x03\x02"+
		"\x02\x02\u03F1\u03F0\x03\x02\x02\x02\u03F2\x91\x03\x02\x02\x02\u03F3\u03F4"+
		"\x05\x94K\x02\u03F4\u03F6\x05\x96L\x02\u03F5\u03F7\x05\xA4S\x02\u03F6"+
		"\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u0405\x03\x02"+
		"\x02\x02\u03F8\u03FC\x05Z.\x02\u03F9\u03FB\x05\xE8u\x02\u03FA\u03F9\x03"+
		"\x02\x02\x02\u03FB\u03FE\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FC"+
		"\u03FD\x03\x02\x02\x02\u03FD\u03FF\x03\x02\x02\x02\u03FE\u03FC\x03\x02"+
		"\x02\x02\u03FF\u0400\x05\x94K\x02\u0400\u0402\x05\x96L\x02\u0401\u0403"+
		"\x05\xA4S\x02\u0402\u0401\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02"+
		"\u0403\u0405\x03\x02\x02\x02\u0404\u03F3\x03\x02\x02\x02\u0404\u03F8\x03"+
		"\x02\x02\x02\u0405\x93\x03\x02\x02\x02\u0406\u0409\x05v<\x02\u0407\u0409"+
		"\x072\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0407\x03\x02\x02\x02"+
		"\u0409\x95\x03\x02\x02\x02\u040A\u040B\x07h\x02\x02\u040B\u040D\x07;\x02"+
		"\x02\u040C\u040E\x05\x98M\x02\u040D\u040C\x03\x02\x02\x02\u040D\u040E"+
		"\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0411\x07<\x02\x02"+
		"\u0410\u0412\x05\"\x12\x02\u0411\u0410\x03\x02\x02\x02\u0411\u0412\x03"+
		"\x02\x02\x02\u0412\x97\x03\x02\x02\x02\u0413\u0414\x05\x9AN\x02\u0414"+
		"\u0415\x07B\x02\x02\u0415\u0416\x05\xA0Q\x02\u0416\u0419\x03\x02\x02\x02"+
		"\u0417\u0419\x05\xA0Q\x02\u0418\u0413\x03\x02\x02\x02\u0418\u0417\x03"+
		"\x02\x02\x02\u0419\x99\x03\x02\x02\x02\u041A\u041F\x05\x9CO\x02\u041B"+
		"\u041C\x07B\x02\x02\u041C\u041E\x05\x9CO\x02\u041D\u041B\x03\x02\x02\x02"+
		"\u041E\u0421\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02\u041F\u0420\x03"+
		"\x02\x02\x02\u0420\u042B\x03\x02\x02\x02\u0421\u041F\x03\x02\x02\x02\u0422"+
		"\u0427\x05\xA2R\x02\u0423\u0424\x07B\x02\x02\u0424\u0426\x05\x9CO\x02"+
		"\u0425\u0423\x03\x02\x02\x02\u0426\u0429\x03\x02\x02\x02\u0427\u0425\x03"+
		"\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429"+
		"\u0427\x03\x02\x02\x02\u042A\u041A\x03\x02\x02\x02\u042A\u0422\x03\x02"+
		"\x02\x02\u042B\x9B\x03\x02\x02\x02\u042C\u042E\x05\x9EP\x02\u042D\u042C"+
		"\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u042D\x03\x02\x02\x02"+
		"\u042F\u0430\x03\x02\x02\x02\u0430\u0432\x03\x02\x02\x02\u0431\u042F\x03"+
		"\x02\x02\x02\u0432\u0433\x05v<\x02\u0433\u0434\x05r:\x02\u0434\x9D\x03"+
		"\x02\x02\x02\u0435\u0438\x05\xE8u\x02\u0436\u0438\x07\x14\x02\x02\u0437"+
		"\u0435\x03\x02\x02\x02\u0437\u0436\x03\x02\x02\x02\u0438\x9F\x03\x02\x02"+
		"\x02\u0439\u043B\x05\x9EP\x02\u043A\u0439\x03\x02\x02\x02\u043B\u043E"+
		"\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02"+
		"\u043D\u043F\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F\u0443\x05"+
		"v<\x02\u0440\u0442\x05\xE8u\x02\u0441\u0440\x03\x02\x02\x02\u0442\u0445"+
		"\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02"+
		"\u0444\u0446\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0446\u0447\x07"+
		"j\x02\x02\u0447\u0448\x05r:\x02\u0448\u044B\x03\x02\x02\x02\u0449\u044B"+
		"\x05\x9CO\x02\u044A\u043C\x03\x02\x02\x02\u044A\u0449\x03\x02\x02\x02"+
		"\u044B\xA1\x03\x02\x02\x02\u044C\u044E\x05\xE8u\x02\u044D\u044C\x03\x02"+
		"\x02\x02\u044E\u0451\x03\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F"+
		"\u0450\x03\x02\x02\x02\u0450\u0452\x03\x02\x02\x02\u0451\u044F\x03\x02"+
		"\x02\x02\u0452\u0455\x05v<\x02\u0453\u0454\x07h\x02\x02\u0454\u0456\x07"+
		"C\x02\x02\u0455\u0453\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456"+
		"\u0457\x03\x02\x02\x02\u0457\u0458\x07-\x02\x02\u0458\xA3\x03\x02\x02"+
		"\x02\u0459\u045A\x07/\x02\x02\u045A\u045B\x05\xA6T\x02\u045B\xA5\x03\x02"+
		"\x02\x02\u045C\u0461\x05\xA8U\x02\u045D\u045E\x07B\x02\x02\u045E\u0460"+
		"\x05\xA8U\x02\u045F\u045D\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02"+
		"\u0461\u045F\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\xA7\x03"+
		"\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0464\u0467\x05\x12\n\x02\u0465"+
		"\u0467\x05\x1E\x10\x02\u0466\u0464\x03\x02\x02\x02\u0466\u0465\x03\x02"+
		"\x02\x02\u0467\xA9\x03\x02\x02\x02\u0468\u046B\x05\xFE\x80\x02\u0469\u046B"+
		"\x07A\x02\x02\u046A\u0468\x03\x02\x02\x02\u046A\u0469\x03\x02\x02\x02"+
		"\u046B\xAB\x03\x02\x02\x02\u046C\u046D\x05\xFE\x80\x02\u046D\xAD\x03\x02"+
		"\x02\x02\u046E\u046F\x07(\x02\x02\u046F\u0470\x05\xFE\x80\x02\u0470\xAF"+
		"\x03\x02\x02\x02\u0471\u0473\x05\xB2Z\x02\u0472\u0471\x03\x02\x02\x02"+
		"\u0473\u0476\x03\x02\x02\x02\u0474\u0472\x03\x02\x02\x02\u0474\u0475\x03"+
		"\x02\x02\x02\u0475\u0477\x03\x02\x02\x02\u0476\u0474\x03\x02\x02\x02\u0477"+
		"\u0479\x05\xB4[\x02\u0478\u047A\x05\xA4S\x02\u0479\u0478\x03\x02\x02\x02"+
		"\u0479\u047A\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047C\x05"+
		"\xB8]\x02\u047C\xB1\x03\x02\x02\x02\u047D\u0482\x05\xE8u\x02\u047E\u0482"+
		"\x07%\x02\x02\u047F\u0482\x07$\x02\x02\u0480\u0482\x07#\x02\x02\u0481"+
		"\u047D\x03\x02\x02\x02\u0481\u047E\x03\x02\x02\x02\u0481\u047F\x03\x02"+
		"\x02\x02\u0481\u0480\x03\x02\x02\x02\u0482\xB3\x03\x02\x02\x02\u0483\u0485"+
		"\x05Z.\x02\u0484\u0483\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485"+
		"\u0486\x03\x02\x02\x02\u0486\u0487\x05\xB6\\\x02\u0487\u0489\x07;\x02"+
		"\x02\u0488\u048A\x05\x98M\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A"+
		"\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048C\x07<\x02\x02"+
		"\u048C\xB5\x03\x02\x02\x02\u048D\u048E\x07h\x02\x02\u048E\xB7\x03\x02"+
		"\x02\x02\u048F\u0491\x07=\x02\x02\u0490\u0492\x05\xBA^\x02\u0491\u0490"+
		"\x03\x02\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0494\x03\x02\x02\x02"+
		"\u0493\u0495\x05\u0100\x81\x02\u0494\u0493\x03\x02\x02\x02\u0494\u0495"+
		"\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0497\x07>\x02\x02"+
		"\u0497\xB9\x03\x02\x02\x02\u0498\u049A\x05,\x17\x02\u0499\u0498\x03\x02"+
		"\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B"+
		"\u049C\x07-\x02\x02\u049C\u049E\x07;\x02\x02\u049D\u049F\x05\u0190\xC9"+
		"\x02\u049E\u049D\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\u04A0"+
		"\x03\x02\x02\x02\u04A0\u04A1\x07<\x02\x02\u04A1\u04C7\x07A\x02\x02\u04A2"+
		"\u04A4\x05,\x17\x02\u04A3\u04A2\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02"+
		"\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A6\x07*\x02\x02\u04A6\u04A8"+
		"\x07;\x02\x02\u04A7\u04A9\x05\u0190\xC9\x02\u04A8\u04A7\x03\x02\x02\x02"+
		"\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AB\x07"+
		"<\x02\x02\u04AB\u04C7\x07A\x02\x02\u04AC\u04AD\x05<\x1F\x02\u04AD\u04AF"+
		"\x07C\x02\x02\u04AE\u04B0\x05,\x17\x02\u04AF\u04AE\x03\x02\x02\x02\u04AF"+
		"\u04B0\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x07*\x02"+
		"\x02\u04B2\u04B4\x07;\x02\x02\u04B3\u04B5\x05\u0190\xC9\x02\u04B4\u04B3"+
		"\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02"+
		"\u04B6\u04B7\x07<\x02\x02\u04B7\u04B8\x07A\x02\x02\u04B8\u04C7\x03\x02"+
		"\x02\x02\u04B9\u04BA\x05\u0162\xB2\x02\u04BA\u04BC\x07C\x02\x02\u04BB"+
		"\u04BD\x05,\x17\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02"+
		"\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04BF\x07*\x02\x02\u04BF\u04C1"+
		"\x07;\x02\x02\u04C0\u04C2\x05\u0190\xC9\x02\u04C1\u04C0\x03\x02\x02\x02"+
		"\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C4\x07"+
		"<\x02\x02\u04C4\u04C5\x07A\x02\x02\u04C5\u04C7\x03\x02\x02\x02\u04C6\u0499"+
		"\x03\x02\x02\x02\u04C6\u04A3\x03\x02\x02\x02\u04C6\u04AC\x03\x02\x02\x02"+
		"\u04C6\u04B9\x03\x02\x02\x02\u04C7\xBB\x03\x02\x02\x02\u04C8\u04CA\x05"+
		"X-\x02\u04C9\u04C8\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02\u04CB\u04C9"+
		"\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CE\x03\x02\x02\x02"+
		"\u04CD\u04CB\x03\x02\x02\x02\u04CE\u04CF\x07\x12\x02\x02\u04CF\u04D1\x07"+
		"h\x02\x02\u04D0\u04D2\x05`1\x02\u04D1\u04D0\x03\x02\x02\x02\u04D1\u04D2"+
		"\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D4\x05\xBE`\x02"+
		"\u04D4\xBD\x03\x02\x02\x02\u04D5\u04D7\x07=\x02\x02\u04D6\u04D8\x05\xC0"+
		"a\x02\u04D7\u04D6\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DA"+
		"\x03\x02\x02\x02\u04D9\u04DB\x07B\x02\x02\u04DA\u04D9\x03\x02\x02\x02"+
		"\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DD\x03\x02\x02\x02\u04DC\u04DE\x05"+
		"\xC6d\x02\u04DD\u04DC\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE"+
		"\u04DF\x03\x02\x02\x02\u04DF\u04E0\x07>\x02\x02\u04E0\xBF\x03\x02\x02"+
		"\x02\u04E1\u04E6\x05\xC2b\x02\u04E2\u04E3\x07B\x02\x02\u04E3\u04E5\x05"+
		"\xC2b\x02\u04E4\u04E2\x03\x02\x02\x02\u04E5\u04E8\x03\x02\x02\x02\u04E6"+
		"\u04E4\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7\xC1\x03\x02\x02"+
		"\x02\u04E8\u04E6\x03\x02\x02\x02\u04E9\u04EB\x05\xC4c\x02\u04EA\u04E9"+
		"\x03\x02\x02\x02\u04EB\u04EE\x03\x02\x02\x02\u04EC\u04EA\x03\x02\x02\x02"+
		"\u04EC\u04ED\x03\x02\x02\x02\u04ED\u04EF\x03\x02\x02\x02\u04EE\u04EC\x03"+
		"\x02\x02\x02\u04EF\u04F5\x07h\x02\x02\u04F0\u04F2\x07;\x02\x02\u04F1\u04F3"+
		"\x05\u0190\xC9\x02\u04F2\u04F1\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02"+
		"\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04F6\x07<\x02\x02\u04F5\u04F0"+
		"\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F8\x03\x02\x02\x02"+
		"\u04F7\u04F9\x05d3\x02\u04F8\u04F7\x03\x02\x02\x02\u04F8\u04F9\x03\x02"+
		"\x02\x02\u04F9\xC3\x03\x02\x02\x02\u04FA\u04FB\x05\xE8u\x02\u04FB\xC5"+
		"\x03\x02\x02\x02\u04FC\u0500\x07A\x02\x02\u04FD\u04FF\x05f4\x02\u04FE"+
		"\u04FD\x03\x02\x02\x02\u04FF\u0502\x03\x02\x02\x02\u0500\u04FE\x03\x02"+
		"\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\xC7\x03\x02\x02\x02\u0502\u0500"+
		"\x03\x02\x02\x02\u0503\u0506\x05\xCAf\x02\u0504\u0506\x05\xDCo\x02\u0505"+
		"\u0503\x03\x02\x02\x02\u0505\u0504\x03\x02\x02\x02\u0506\xC9\x03\x02\x02"+
		"\x02\u0507\u0509\x05\xCCg\x02\u0508\u0507\x03\x02\x02\x02\u0509\u050C"+
		"\x03\x02\x02\x02\u050A\u0508\x03\x02\x02\x02\u050A\u050B\x03\x02\x02\x02"+
		"\u050B\u050D\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050D\u050E\x07"+
		"\x1E\x02\x02\u050E\u0510\x07h\x02\x02\u050F\u0511\x05Z.\x02\u0510\u050F"+
		"\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0513\x03\x02\x02\x02"+
		"\u0512\u0514\x05\xCEh\x02\u0513\u0512\x03\x02\x02\x02\u0513\u0514\x03"+
		"\x02\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515\u0516\x05\xD0i\x02\u0516"+
		"\xCB\x03\x02\x02\x02\u0517\u051F\x05\xE8u\x02\u0518\u051F\x07%\x02\x02"+
		"\u0519\u051F\x07$\x02\x02\u051A\u051F\x07#\x02\x02\u051B\u051F\x07\x03"+
		"\x02\x02\u051C\u051F\x07(\x02\x02\u051D\u051F\x07)\x02\x02\u051E\u0517"+
		"\x03\x02\x02\x02\u051E\u0518\x03\x02\x02\x02\u051E\u0519\x03\x02\x02\x02"+
		"\u051E\u051A\x03\x02\x02\x02\u051E\u051B\x03\x02\x02\x02\u051E\u051C\x03"+
		"\x02\x02\x02\u051E\u051D\x03\x02\x02\x02\u051F\xCD\x03\x02\x02\x02\u0520"+
		"\u0521\x07\x13\x02\x02\u0521\u0522\x05b2\x02\u0522\xCF\x03\x02\x02\x02"+
		"\u0523\u0527\x07=\x02\x02\u0524\u0526\x05\xD2j\x02\u0525\u0524\x03\x02"+
		"\x02\x02\u0526\u0529\x03\x02\x02\x02\u0527\u0525\x03\x02\x02\x02\u0527"+
		"\u0528\x03\x02\x02\x02\u0528\u052A\x03\x02\x02\x02\u0529\u0527\x03\x02"+
		"\x02\x02\u052A\u052B\x07>\x02\x02\u052B\xD1\x03\x02\x02\x02\u052C\u0532"+
		"\x05\xD4k\x02\u052D\u0532\x05\xD8m\x02\u052E\u0532\x05T+\x02\u052F\u0532"+
		"\x05\xC8e\x02\u0530\u0532\x07A\x02\x02\u0531\u052C\x03\x02\x02\x02\u0531"+
		"\u052D\x03\x02\x02\x02\u0531\u052E\x03\x02\x02\x02\u0531\u052F\x03\x02"+
		"\x02\x02\u0531\u0530\x03\x02\x02\x02\u0532\xD3\x03\x02\x02\x02\u0533\u0535"+
		"\x05\xD6l\x02\u0534\u0533\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02"+
		"\u0536\u0534\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0539\x03"+
		"\x02\x02\x02\u0538\u0536\x03\x02\x02\x02\u0539\u053A\x05v<\x02\u053A\u053B"+
		"\x05n8\x02\u053B\u053C\x07A\x02\x02\u053C\xD5\x03\x02\x02\x02\u053D\u0542"+
		"\x05\xE8u\x02\u053E\u0542\x07%\x02\x02\u053F\u0542\x07(\x02\x02\u0540"+
		"\u0542\x07\x14\x02\x02\u0541\u053D\x03\x02\x02\x02\u0541\u053E\x03\x02"+
		"\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0540\x03\x02\x02\x02\u0542"+
		"\xD7\x03\x02\x02\x02\u0543\u0545\x05\xDAn\x02\u0544\u0543\x03\x02\x02"+
		"\x02\u0545\u0548\x03\x02\x02\x02\u0546\u0544\x03\x02\x02\x02\u0546\u0547"+
		"\x03\x02\x02\x02\u0547\u0549\x03\x02\x02\x02\u0548\u0546\x03\x02\x02\x02"+
		"\u0549\u054A\x05\x92J\x02\u054A\u054B\x05\xAAV\x02\u054B\xD9\x03\x02\x02"+
		"\x02\u054C\u0553\x05\xE8u\x02\u054D\u0553\x07%\x02\x02\u054E\u0553\x07"+
		"\x03\x02\x02\u054F\u0553\x07\x0E\x02\x02\u0550\u0553\x07(\x02\x02\u0551"+
		"\u0553\x07)\x02\x02\u0552\u054C\x03\x02\x02\x02\u0552\u054D\x03\x02\x02"+
		"\x02\u0552\u054E\x03\x02\x02\x02\u0552\u054F\x03\x02\x02\x02\u0552\u0550"+
		"\x03\x02\x02\x02\u0552\u0551\x03\x02\x02\x02\u0553\xDB\x03\x02\x02\x02"+
		"\u0554\u0556\x05\xCCg\x02\u0555\u0554\x03\x02\x02\x02\u0556\u0559\x03"+
		"\x02\x02\x02\u0557\u0555\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558"+
		"\u055A\x03\x02\x02\x02\u0559\u0557\x03\x02\x02\x02\u055A\u055B\x07i\x02"+
		"\x02\u055B\u055C\x07\x1E\x02\x02\u055C\u055D\x07h\x02\x02\u055D\u055E"+
		"\x05\xDEp\x02\u055E\xDD\x03\x02\x02\x02\u055F\u0563\x07=\x02\x02\u0560"+
		"\u0562\x05\xE0q\x02\u0561\u0560\x03\x02\x02\x02\u0562\u0565\x03\x02\x02"+
		"\x02\u0563\u0561\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0566"+
		"\x03\x02\x02\x02\u0565\u0563\x03\x02\x02\x02\u0566\u0567\x07>\x02\x02"+
		"\u0567\xDF\x03\x02\x02\x02\u0568\u056E\x05\xE2r\x02\u0569\u056E\x05\xD4"+
		"k\x02\u056A\u056E\x05T+\x02\u056B\u056E\x05\xC8e\x02\u056C\u056E\x07A"+
		"\x02\x02\u056D\u0568\x03\x02\x02\x02\u056D\u0569\x03\x02\x02\x02\u056D"+
		"\u056A\x03\x02\x02\x02\u056D\u056B\x03\x02\x02\x02\u056D\u056C\x03\x02"+
		"\x02\x02\u056E\xE1\x03\x02\x02\x02\u056F\u0571\x05\xE4s\x02\u0570\u056F"+
		"\x03\x02\x02\x02\u0571\u0574\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02"+
		"\u0572\u0573\x03\x02\x02\x02\u0573\u0575\x03\x02\x02\x02\u0574\u0572\x03"+
		"\x02\x02\x02\u0575\u0576\x05v<\x02\u0576\u0577\x07h\x02\x02\u0577\u0578"+
		"\x07;\x02\x02\u0578\u057A\x07<\x02\x02\u0579\u057B\x05\"\x12\x02\u057A"+
		"\u0579\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B\u057D\x03\x02"+
		"\x02\x02\u057C\u057E\x05\xE6t\x02\u057D\u057C\x03\x02\x02\x02\u057D\u057E"+
		"\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F\u0580\x07A\x02\x02"+
		"\u0580\xE3\x03\x02\x02\x02\u0581\u0585\x05\xE8u\x02\u0582\u0585\x07%\x02"+
		"\x02\u0583\u0585\x07\x03\x02\x02\u0584\u0581\x03\x02\x02\x02\u0584\u0582"+
		"\x03\x02\x02\x02\u0584\u0583\x03\x02\x02\x02\u0585\xE5\x03\x02\x02\x02"+
		"\u0586\u0587\x07\x0E\x02\x02\u0587\u0588\x05\xF0y\x02\u0588\xE7\x03\x02"+
		"\x02\x02\u0589\u058D\x05\xEAv\x02\u058A\u058D\x05\xF6|\x02\u058B\u058D"+
		"\x05\xF8}\x02\u058C\u0589\x03\x02\x02\x02\u058C\u058A\x03\x02\x02\x02"+
		"\u058C\u058B\x03\x02\x02\x02\u058D\xE9\x03\x02\x02\x02\u058E\u058F\x07"+
		"i\x02\x02\u058F\u0590\x058\x1D\x02\u0590\u0592\x07;\x02\x02\u0591\u0593"+
		"\x05\xECw\x02\u0592\u0591\x03\x02\x02\x02\u0592\u0593\x03\x02\x02\x02"+
		"\u0593";
	private static readonly _serializedATNSegment3: string =
		"\u0594\x03\x02\x02\x02\u0594\u0595\x07<\x02\x02\u0595\xEB\x03\x02\x02"+
		"\x02\u0596\u059B\x05\xEEx\x02\u0597\u0598\x07B\x02\x02\u0598\u059A\x05"+
		"\xEEx\x02\u0599\u0597\x03\x02\x02\x02\u059A\u059D\x03\x02\x02\x02\u059B"+
		"\u0599\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\xED\x03\x02\x02"+
		"\x02\u059D\u059B\x03\x02\x02\x02\u059E\u059F\x07h\x02\x02\u059F\u05A0"+
		"\x07D\x02\x02\u05A0\u05A1\x05\xF0y\x02\u05A1\xEF\x03\x02\x02\x02\u05A2"+
		"\u05A6\x05\u01B2\xDA\x02\u05A3\u05A6\x05\xF2z\x02\u05A4\u05A6\x05\xE8"+
		"u\x02\u05A5\u05A2\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02\u05A5\u05A4"+
		"\x03\x02\x02\x02\u05A6\xF1\x03\x02\x02\x02\u05A7\u05A9\x07=\x02\x02\u05A8"+
		"\u05AA\x05\xF4{\x02\u05A9\u05A8\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02"+
		"\x02\u05AA\u05AC\x03\x02\x02\x02\u05AB\u05AD\x07B\x02\x02\u05AC\u05AB"+
		"\x03\x02\x02\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02"+
		"\u05AE\u05AF\x07>\x02\x02\u05AF\xF3\x03\x02\x02\x02\u05B0\u05B5\x05\xF0"+
		"y\x02\u05B1\u05B2\x07B\x02\x02\u05B2\u05B4\x05\xF0y\x02\u05B3\u05B1\x03"+
		"\x02\x02\x02\u05B4\u05B7\x03\x02\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B5"+
		"\u05B6\x03\x02\x02\x02\u05B6\xF5\x03\x02\x02\x02\u05B7\u05B5\x03\x02\x02"+
		"\x02\u05B8\u05B9\x07i\x02\x02\u05B9\u05BA\x058\x1D\x02\u05BA\xF7\x03\x02"+
		"\x02\x02\u05BB\u05BC\x07i\x02\x02\u05BC\u05BD\x058\x1D\x02\u05BD\u05BE"+
		"\x07;\x02\x02\u05BE\u05BF\x05\xF0y\x02\u05BF\u05C0\x07<\x02\x02\u05C0"+
		"\xF9\x03\x02\x02\x02\u05C1\u05C3\x07=\x02\x02\u05C2\u05C4\x05\xFC\x7F"+
		"\x02\u05C3\u05C2\x03\x02\x02\x02\u05C3\u05C4\x03\x02\x02\x02\u05C4\u05C6"+
		"\x03\x02\x02\x02\u05C5\u05C7\x07B\x02\x02\u05C6\u05C5\x03\x02\x02\x02"+
		"\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C8\x03\x02\x02\x02\u05C8\u05C9\x07"+
		">\x02\x02\u05C9\xFB\x03\x02\x02\x02\u05CA\u05CF\x05t;\x02\u05CB\u05CC"+
		"\x07B\x02\x02\u05CC\u05CE\x05t;\x02\u05CD\u05CB\x03\x02\x02\x02\u05CE"+
		"\u05D1\x03\x02\x02\x02\u05CF\u05CD\x03\x02\x02\x02\u05CF\u05D0\x03\x02"+
		"\x02\x02\u05D0\xFD\x03\x02\x02\x02\u05D1\u05CF\x03\x02\x02\x02\u05D2\u05D4"+
		"\x07=\x02\x02\u05D3\u05D5\x05\u0100\x81\x02\u05D4\u05D3\x03\x02\x02\x02"+
		"\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02\u05D6\u05D7\x07"+
		">\x02\x02\u05D7\xFF\x03\x02\x02\x02\u05D8\u05DC\x05\u0102\x82\x02\u05D9"+
		"\u05DB\x05\u0102\x82\x02\u05DA\u05D9\x03\x02\x02\x02\u05DB\u05DE\x03\x02"+
		"\x02\x02\u05DC\u05DA\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD"+
		"\u0101\x03\x02\x02\x02\u05DE\u05DC\x03\x02\x02\x02\u05DF\u05E3\x05\u0104"+
		"\x83\x02\u05E0\u05E3\x05T+\x02\u05E1\u05E3\x05\u0108\x85\x02\u05E2\u05DF"+
		"\x03\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E1\x03\x02\x02\x02"+
		"\u05E3\u0103\x03\x02\x02\x02\u05E4\u05E5\x05\u0106\x84\x02\u05E5\u05E6"+
		"\x07A\x02\x02\u05E6\u0105\x03\x02\x02\x02\u05E7\u05E9\x05\x9EP\x02\u05E8"+
		"\u05E7\x03\x02\x02\x02\u05E9\u05EC\x03\x02\x02\x02\u05EA\u05E8\x03\x02"+
		"\x02\x02\u05EA\u05EB\x03\x02\x02\x02\u05EB\u05ED\x03\x02\x02\x02\u05EC"+
		"\u05EA\x03\x02\x02\x02\u05ED\u05EE\x05v<\x02\u05EE\u05EF\x05n8\x02\u05EF"+
		"\u0107\x03\x02\x02\x02\u05F0\u05F7\x05\u010C\x87\x02\u05F1\u05F7\x05\u0110"+
		"\x89\x02\u05F2\u05F7\x05\u0118\x8D\x02\u05F3\u05F7\x05\u011A\x8E\x02\u05F4"+
		"\u05F7\x05\u012C\x97\x02\u05F5\u05F7\x05\u0132\x9A\x02\u05F6\u05F0\x03"+
		"\x02\x02\x02\u05F6\u05F1\x03\x02\x02\x02\u05F6\u05F2\x03\x02\x02\x02\u05F6"+
		"\u05F3\x03\x02\x02\x02\u05F6\u05F4\x03\x02\x02\x02\u05F6\u05F5\x03\x02"+
		"\x02\x02\u05F7\u0109\x03\x02\x02\x02\u05F8\u05FE\x05\u010C\x87\x02\u05F9"+
		"\u05FE\x05\u0112\x8A\x02\u05FA\u05FE\x05\u011C\x8F\x02\u05FB\u05FE\x05"+
		"\u012E\x98\x02\u05FC\u05FE\x05\u0134\x9B\x02\u05FD\u05F8\x03\x02\x02\x02"+
		"\u05FD\u05F9\x03\x02\x02\x02\u05FD\u05FA\x03\x02\x02\x02\u05FD\u05FB\x03"+
		"\x02\x02\x02\u05FD\u05FC\x03\x02\x02\x02\u05FE\u010B\x03\x02\x02\x02\u05FF"+
		"\u060C\x05\xFE\x80\x02\u0600\u060C\x05\u010E\x88\x02\u0601\u060C\x05\u0114"+
		"\x8B\x02\u0602\u060C\x05\u011E\x90\x02\u0603\u060C\x05\u0120\x91\x02\u0604"+
		"\u060C\x05\u0130\x99\x02\u0605\u060C\x05\u0144\xA3\x02\u0606\u060C\x05"+
		"\u0146\xA4\x02\u0607\u060C\x05\u0148\xA5\x02\u0608\u060C\x05\u014C\xA7"+
		"\x02\u0609\u060C\x05\u014A\xA6\x02\u060A\u060C\x05\u014E\xA8\x02\u060B"+
		"\u05FF\x03\x02\x02\x02\u060B\u0600\x03\x02\x02\x02\u060B\u0601\x03\x02"+
		"\x02\x02\u060B\u0602\x03\x02\x02\x02\u060B\u0603\x03\x02\x02\x02\u060B"+
		"\u0604\x03\x02\x02\x02\u060B\u0605\x03\x02\x02\x02\u060B\u0606\x03\x02"+
		"\x02\x02\u060B\u0607\x03\x02\x02\x02\u060B\u0608\x03\x02\x02\x02\u060B"+
		"\u0609\x03\x02\x02\x02\u060B\u060A\x03\x02\x02\x02\u060C\u010D\x03\x02"+
		"\x02\x02\u060D\u060E\x07A\x02\x02\u060E\u010F\x03\x02\x02\x02\u060F\u0610"+
		"\x07h\x02\x02\u0610\u0611\x07J\x02\x02\u0611\u0612\x05\u0108\x85\x02\u0612"+
		"\u0111\x03\x02\x02\x02\u0613\u0614\x07h\x02\x02\u0614\u0615\x07J\x02\x02"+
		"\u0615\u0616\x05\u010A\x86\x02\u0616\u0113\x03\x02\x02\x02\u0617\u0618"+
		"\x05\u0116\x8C\x02\u0618\u0619\x07A\x02\x02\u0619\u0115\x03\x02\x02\x02"+
		"\u061A\u0622\x05\u01AC\xD7\x02\u061B\u0622\x05\u01CA\xE6\x02\u061C\u0622"+
		"\x05\u01CC\xE7\x02\u061D\u0622\x05\u01D2\xEA\x02\u061E\u0622\x05\u01D6"+
		"\xEC\x02\u061F\u0622\x05\u018A\xC6\x02\u0620\u0622\x05\u0176\xBC\x02\u0621"+
		"\u061A\x03\x02\x02\x02\u0621\u061B\x03\x02\x02\x02\u0621\u061C\x03\x02"+
		"\x02\x02\u0621\u061D\x03\x02\x02\x02\u0621\u061E\x03\x02\x02\x02\u0621"+
		"\u061F\x03\x02\x02\x02\u0621\u0620\x03\x02\x02\x02\u0622\u0117\x03\x02"+
		"\x02\x02\u0623\u0624\x07\x18\x02\x02\u0624\u0625\x07;\x02\x02\u0625\u0626"+
		"\x05\u01A0\xD1\x02\u0626\u0627\x07<\x02\x02\u0627\u0628\x05\u0108\x85"+
		"\x02\u0628\u0119\x03\x02\x02\x02\u0629\u062A\x07\x18\x02\x02\u062A\u062B"+
		"\x07;\x02\x02\u062B\u062C\x05\u01A0\xD1\x02\u062C\u062D\x07<\x02\x02\u062D"+
		"\u062E\x05\u010A\x86\x02\u062E\u062F\x07\x11\x02\x02\u062F\u0630\x05\u0108"+
		"\x85\x02\u0630\u011B\x03\x02\x02\x02\u0631\u0632\x07\x18\x02\x02\u0632"+
		"\u0633\x07;\x02\x02\u0633\u0634\x05\u01A0\xD1\x02\u0634\u0635\x07<\x02"+
		"\x02\u0635\u0636\x05\u010A\x86\x02\u0636\u0637\x07\x11\x02\x02\u0637\u0638"+
		"\x05\u010A\x86\x02\u0638\u011D\x03\x02\x02\x02\u0639\u063A\x07\x04\x02"+
		"\x02\u063A\u063B\x05\u01A0\xD1\x02\u063B\u063C\x07A\x02\x02\u063C\u0644"+
		"\x03\x02\x02\x02\u063D\u063E\x07\x04\x02\x02\u063E\u063F\x05\u01A0\xD1"+
		"\x02\u063F\u0640\x07J\x02\x02\u0640\u0641\x05\u01A0\xD1\x02\u0641\u0642"+
		"\x07A\x02\x02\u0642\u0644\x03\x02\x02\x02\u0643\u0639\x03\x02\x02\x02"+
		"\u0643\u063D\x03\x02\x02\x02\u0644\u011F\x03\x02\x02\x02\u0645\u0646\x07"+
		"+\x02\x02\u0646\u0647\x07;\x02\x02\u0647\u0648\x05\u01A0\xD1\x02\u0648"+
		"\u0649\x07<\x02\x02\u0649\u064A\x05\u0122\x92\x02\u064A\u0121\x03\x02"+
		"\x02\x02\u064B\u064F\x07=\x02\x02\u064C\u064E\x05\u0124\x93\x02\u064D"+
		"\u064C\x03\x02\x02\x02\u064E\u0651\x03\x02\x02\x02\u064F\u064D\x03\x02"+
		"\x02\x02\u064F\u0650\x03\x02\x02\x02\u0650\u0655\x03\x02\x02\x02\u0651"+
		"\u064F\x03\x02\x02\x02\u0652\u0654\x05\u0128\x95\x02\u0653\u0652\x03\x02"+
		"\x02\x02\u0654\u0657\x03\x02\x02\x02\u0655\u0653\x03\x02\x02\x02\u0655"+
		"\u0656\x03\x02\x02\x02\u0656\u0658\x03\x02\x02\x02\u0657\u0655\x03\x02"+
		"\x02\x02\u0658\u0659\x07>\x02\x02\u0659\u0123\x03\x02\x02\x02\u065A\u065B"+
		"\x05\u0126\x94\x02\u065B\u065C\x05\u0100\x81\x02\u065C\u0125\x03\x02\x02"+
		"\x02\u065D\u0661\x05\u0128\x95\x02\u065E\u0660\x05\u0128\x95\x02\u065F"+
		"\u065E\x03\x02\x02\x02\u0660\u0663\x03\x02\x02\x02\u0661\u065F\x03\x02"+
		"\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0127\x03\x02\x02\x02\u0663"+
		"\u0661\x03\x02\x02\x02\u0664\u0665\x07\b\x02\x02\u0665\u0666\x05\u019E"+
		"\xD0\x02\u0666\u0667\x07J\x02\x02\u0667\u066F\x03\x02\x02\x02\u0668\u0669"+
		"\x07\b\x02\x02\u0669\u066A\x05\u012A\x96\x02\u066A\u066B\x07J\x02\x02"+
		"\u066B\u066F\x03\x02\x02\x02\u066C\u066D\x07\x0E\x02\x02\u066D\u066F\x07"+
		"J\x02\x02\u066E\u0664\x03\x02\x02\x02\u066E\u0668\x03\x02\x02\x02\u066E"+
		"\u066C\x03\x02\x02\x02\u066F\u0129\x03\x02\x02\x02\u0670\u0671\x07h\x02"+
		"\x02\u0671\u012B\x03\x02\x02\x02\u0672\u0673\x074\x02\x02\u0673\u0674"+
		"\x07;\x02\x02\u0674\u0675\x05\u01A0\xD1\x02\u0675\u0676\x07<\x02\x02\u0676"+
		"\u0677\x05\u0108\x85\x02\u0677\u012D\x03\x02\x02\x02\u0678\u0679\x074"+
		"\x02\x02\u0679\u067A\x07;\x02\x02\u067A\u067B\x05\u01A0\xD1\x02\u067B"+
		"\u067C\x07<\x02\x02\u067C\u067D\x05\u010A\x86\x02\u067D\u012F\x03\x02"+
		"\x02\x02\u067E\u067F\x07\x0F\x02\x02\u067F\u0680\x05\u0108\x85\x02\u0680"+
		"\u0681\x074\x02\x02\u0681\u0682\x07;\x02\x02\u0682\u0683\x05\u01A0\xD1"+
		"\x02\u0683\u0684\x07<\x02\x02\u0684\u0685\x07A\x02\x02\u0685\u0131\x03"+
		"\x02\x02\x02\u0686\u0689\x05\u0136\x9C\x02\u0687\u0689\x05\u0140\xA1\x02"+
		"\u0688\u0686\x03\x02\x02\x02\u0688\u0687\x03\x02\x02\x02\u0689\u0133\x03"+
		"\x02\x02\x02\u068A\u068D\x05\u0138\x9D\x02\u068B\u068D\x05\u0142\xA2\x02"+
		"\u068C\u068A\x03\x02\x02\x02\u068C\u068B\x03\x02\x02\x02\u068D\u0135\x03"+
		"\x02\x02\x02\u068E\u068F\x07\x17\x02\x02\u068F\u0691\x07;\x02\x02\u0690"+
		"\u0692\x05\u013A\x9E\x02\u0691\u0690\x03\x02\x02\x02\u0691\u0692\x03\x02"+
		"\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\u0695\x07A\x02\x02\u0694\u0696"+
		"\x05\u01A0\xD1\x02\u0695\u0694\x03\x02\x02\x02\u0695\u0696\x03\x02\x02"+
		"\x02\u0696\u0697\x03\x02\x02\x02\u0697\u0699\x07A\x02\x02\u0698\u069A"+
		"\x05\u013C\x9F\x02\u0699\u0698\x03\x02\x02\x02\u0699\u069A\x03\x02\x02"+
		"\x02\u069A\u069B\x03\x02\x02\x02\u069B\u069C\x07<\x02\x02\u069C\u069D"+
		"\x05\u0108\x85\x02\u069D\u0137\x03\x02\x02\x02\u069E\u069F\x07\x17\x02"+
		"\x02\u069F\u06A1\x07;\x02\x02\u06A0\u06A2\x05\u013A\x9E\x02\u06A1\u06A0"+
		"\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A3\x03\x02\x02\x02"+
		"\u06A3\u06A5\x07A\x02\x02\u06A4\u06A6\x05\u01A0\xD1\x02\u06A5\u06A4\x03"+
		"\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6\u06A7\x03\x02\x02\x02\u06A7"+
		"\u06A9\x07A\x02\x02\u06A8\u06AA\x05\u013C\x9F\x02\u06A9\u06A8\x03\x02"+
		"\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AB\x03\x02\x02\x02\u06AB"+
		"\u06AC\x07<\x02\x02\u06AC\u06AD\x05\u010A\x86\x02\u06AD\u0139\x03\x02"+
		"\x02\x02\u06AE\u06B1\x05\u013E\xA0\x02\u06AF\u06B1\x05\u0106\x84\x02\u06B0"+
		"\u06AE\x03\x02\x02\x02\u06B0\u06AF\x03\x02\x02\x02\u06B1\u013B\x03\x02"+
		"\x02\x02\u06B2\u06B3\x05\u013E\xA0\x02\u06B3\u013D\x03\x02\x02\x02\u06B4"+
		"\u06B9\x05\u0116\x8C\x02\u06B5\u06B6\x07B\x02\x02\u06B6\u06B8\x05\u0116"+
		"\x8C\x02\u06B7\u06B5\x03\x02\x02\x02\u06B8\u06BB\x03\x02\x02\x02\u06B9"+
		"\u06B7\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u013F\x03\x02"+
		"\x02\x02\u06BB\u06B9\x03\x02\x02\x02\u06BC\u06BD\x07\x17\x02\x02\u06BD"+
		"\u06C1\x07;\x02\x02\u06BE\u06C0\x05\x9EP\x02\u06BF\u06BE\x03\x02\x02\x02"+
		"\u06C0\u06C3\x03\x02\x02\x02\u06C1\u06BF\x03\x02\x02\x02\u06C1\u06C2\x03"+
		"\x02\x02\x02\u06C2\u06C4\x03\x02\x02\x02\u06C3\u06C1\x03\x02\x02\x02\u06C4"+
		"\u06C5\x05v<\x02\u06C5\u06C6\x05r:\x02\u06C6\u06C7\x07J\x02\x02\u06C7"+
		"\u06C8\x05\u01A0\xD1\x02\u06C8\u06C9\x07<\x02\x02\u06C9\u06CA\x05\u0108"+
		"\x85\x02\u06CA\u0141\x03\x02\x02\x02\u06CB\u06CC\x07\x17\x02\x02\u06CC"+
		"\u06D0\x07;\x02\x02\u06CD\u06CF\x05\x9EP\x02\u06CE\u06CD\x03\x02\x02\x02"+
		"\u06CF\u06D2\x03\x02\x02\x02\u06D0\u06CE\x03\x02\x02\x02\u06D0\u06D1\x03"+
		"\x02\x02\x02\u06D1\u06D3\x03\x02\x02\x02\u06D2\u06D0\x03\x02\x02\x02\u06D3"+
		"\u06D4\x05v<\x02\u06D4\u06D5\x05r:\x02\u06D5\u06D6\x07J\x02\x02\u06D6"+
		"\u06D7\x05\u01A0\xD1\x02\u06D7\u06D8\x07<\x02\x02\u06D8\u06D9\x05\u010A"+
		"\x86\x02\u06D9\u0143\x03\x02\x02\x02\u06DA\u06DC\x07\x06\x02\x02\u06DB"+
		"\u06DD\x07h\x02\x02\u06DC\u06DB\x03\x02\x02\x02\u06DC\u06DD\x03\x02\x02"+
		"\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06DF\x07A\x02\x02\u06DF\u0145"+
		"\x03\x02\x02\x02\u06E0\u06E2\x07\r\x02\x02\u06E1\u06E3\x07h\x02\x02\u06E2"+
		"\u06E1\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E4\x03\x02"+
		"\x02\x02\u06E4\u06E5\x07A\x02\x02\u06E5\u0147\x03\x02\x02\x02\u06E6\u06E8"+
		"\x07&\x02\x02\u06E7\u06E9\x05\u01A0\xD1\x02\u06E8\u06E7\x03\x02\x02\x02"+
		"\u06E8\u06E9\x03\x02\x02\x02\u06E9\u06EA\x03\x02\x02\x02\u06EA\u06EB\x07"+
		"A\x02\x02\u06EB\u0149\x03\x02\x02\x02\u06EC\u06ED\x07.\x02\x02\u06ED\u06EE"+
		"\x05\u01A0\xD1\x02\u06EE\u06EF\x07A\x02\x02\u06EF\u014B\x03\x02\x02\x02"+
		"\u06F0\u06F1\x07,\x02\x02\u06F1\u06F2\x07;\x02\x02\u06F2\u06F3\x05\u01A0"+
		"\xD1\x02\u06F3\u06F4\x07<\x02\x02\u06F4\u06F5\x05\xFE\x80\x02\u06F5\u014D"+
		"\x03\x02\x02\x02\u06F6\u06F7\x071\x02\x02\u06F7\u06F8\x05\xFE\x80\x02"+
		"\u06F8\u06F9\x05\u0150\xA9\x02\u06F9\u0703\x03\x02\x02\x02\u06FA\u06FB"+
		"\x071\x02\x02\u06FB\u06FD\x05\xFE\x80\x02\u06FC\u06FE\x05\u0150\xA9\x02"+
		"\u06FD\u06FC\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02\x02\u06FE\u06FF\x03"+
		"\x02\x02\x02\u06FF\u0700\x05\u0158\xAD\x02\u0700\u0703\x03\x02\x02\x02"+
		"\u0701\u0703\x05\u015A\xAE\x02\u0702\u06F6\x03\x02\x02\x02\u0702\u06FA"+
		"\x03\x02\x02\x02\u0702\u0701\x03\x02\x02\x02\u0703\u014F\x03\x02\x02\x02"+
		"\u0704\u0708\x05\u0152\xAA\x02\u0705\u0707\x05\u0152\xAA\x02\u0706\u0705"+
		"\x03\x02\x02\x02\u0707\u070A\x03\x02\x02\x02\u0708\u0706\x03\x02\x02\x02"+
		"\u0708\u0709\x03\x02\x02\x02\u0709\u0151\x03\x02\x02\x02\u070A\u0708\x03"+
		"\x02\x02\x02\u070B\u070C\x07\t\x02\x02\u070C\u070D\x07;\x02\x02\u070D"+
		"\u070E\x05\u0154\xAB\x02\u070E\u070F\x07<\x02\x02\u070F\u0710\x05\xFE"+
		"\x80\x02\u0710\u0153\x03\x02\x02\x02\u0711\u0713\x05\x9EP\x02\u0712\u0711"+
		"\x03\x02\x02\x02\u0713\u0716\x03\x02\x02\x02\u0714\u0712\x03\x02\x02\x02"+
		"\u0714\u0715\x03\x02\x02\x02\u0715\u0717\x03\x02\x02\x02\u0716\u0714\x03"+
		"\x02\x02\x02\u0717\u0718\x05\u0156\xAC\x02\u0718\u0719\x05r:\x02\u0719"+
		"\u0155\x03\x02\x02\x02\u071A\u071F\x05~@\x02\u071B\u071C\x07X\x02\x02"+
		"\u071C\u071E\x05\x12\n\x02\u071D\u071B\x03\x02\x02\x02\u071E\u0721\x03"+
		"\x02\x02\x02\u071F\u071D\x03\x02\x02\x02\u071F\u0720\x03\x02\x02\x02\u0720"+
		"\u0157\x03\x02\x02\x02\u0721\u071F\x03\x02\x02\x02\u0722\u0723\x07\x15"+
		"\x02\x02\u0723\u0724\x05\xFE\x80\x02\u0724\u0159\x03\x02\x02\x02\u0725"+
		"\u0726\x071\x02\x02\u0726\u0727\x05\u015C\xAF\x02\u0727\u0729\x05\xFE"+
		"\x80\x02\u0728\u072A\x05\u0150\xA9\x02\u0729\u0728\x03\x02\x02\x02\u0729"+
		"\u072A\x03\x02\x02\x02\u072A\u072C\x03\x02\x02\x02\u072B\u072D\x05\u0158"+
		"\xAD\x02\u072C\u072B\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072D"+
		"\u015B\x03\x02\x02\x02\u072E\u072F\x07;\x02\x02\u072F\u0731\x05\u015E"+
		"\xB0\x02\u0730\u0732\x07A\x02\x02\u0731\u0730\x03\x02\x02\x02\u0731\u0732"+
		"\x03\x02\x02\x02\u0732\u0733\x03\x02\x02\x02\u0733\u0734\x07<\x02\x02"+
		"\u0734\u015D\x03\x02\x02\x02\u0735\u073A\x05\u0160\xB1\x02\u0736\u0737"+
		"\x07A\x02\x02\u0737\u0739\x05\u0160\xB1\x02\u0738\u0736\x03\x02\x02\x02"+
		"\u0739\u073C\x03\x02\x02\x02\u073A\u0738\x03\x02\x02\x02\u073A\u073B\x03"+
		"\x02\x02\x02\u073B\u015F\x03\x02\x02\x02\u073C\u073A\x03\x02\x02\x02\u073D"+
		"\u073F\x05\x9EP\x02\u073E\u073D\x03\x02\x02\x02\u073F\u0742\x03\x02\x02"+
		"\x02\u0740\u073E\x03\x02\x02\x02\u0740\u0741\x03\x02\x02\x02\u0741\u0743"+
		"\x03\x02\x02\x02\u0742\u0740\x03\x02\x02\x02\u0743\u0744\x05v<\x02\u0744"+
		"\u0745\x05r:\x02\u0745\u0746\x07D\x02\x02\u0746\u0747\x05\u01A0\xD1\x02"+
		"\u0747\u0161\x03\x02\x02\x02\u0748\u074B\x05\u0170\xB9\x02\u0749\u074B"+
		"\x05\u0198\xCD\x02\u074A\u0748\x03\x02\x02\x02\u074A\u0749\x03\x02\x02"+
		"\x02\u074B\u074F\x03\x02\x02\x02\u074C\u074E\x05\u016A\xB6\x02\u074D\u074C"+
		"\x03\x02\x02\x02\u074E\u0751\x03\x02\x02\x02\u074F\u074D\x03\x02\x02\x02"+
		"\u074F\u0750\x03\x02\x02\x02\u0750\u0163\x03\x02\x02\x02\u0751\u074F\x03"+
		"\x02\x02\x02\u0752\u0770\x05\x02\x02\x02\u0753\u0758\x058\x1D\x02\u0754"+
		"\u0755\x07?\x02\x02\u0755\u0757\x07@\x02\x02\u0756\u0754\x03\x02\x02\x02"+
		"\u0757\u075A\x03\x02\x02\x02\u0758\u0756\x03\x02\x02\x02\u0758\u0759\x03"+
		"\x02\x02\x02\u0759\u075B\x03\x02\x02\x02\u075A\u0758\x03\x02\x02\x02\u075B"+
		"\u075C\x07C\x02\x02\u075C\u075D\x07\v\x02\x02\u075D\u0770\x03\x02\x02"+
		"\x02\u075E\u075F\x072\x02\x02\u075F\u0760\x07C\x02\x02\u0760\u0770\x07"+
		"\v\x02\x02\u0761\u0770\x07-\x02\x02\u0762\u0763\x058\x1D\x02\u0763\u0764"+
		"\x07C\x02\x02\u0764\u0765\x07-\x02\x02\u0765\u0770\x03\x02\x02\x02\u0766"+
		"\u0767\x07;\x02\x02\u0767\u0768\x05\u01A0\xD1\x02\u0768\u0769\x07<\x02"+
		"\x02\u0769\u0770\x03\x02\x02\x02\u076A\u0770\x05\u0176\xBC\x02\u076B\u0770"+
		"\x05\u017E\xC0\x02\u076C\u0770\x05\u0184\xC3\x02\u076D\u0770\x05\u018A"+
		"\xC6\x02\u076E\u0770\x05\u0192\xCA\x02\u076F\u0752\x03\x02\x02\x02\u076F"+
		"\u0753\x03\x02\x02\x02\u076F\u075E\x03\x02\x02\x02\u076F\u0761\x03\x02"+
		"\x02\x02\u076F\u0762\x03\x02\x02\x02\u076F\u0766\x03\x02\x02\x02\u076F"+
		"\u076A\x03\x02\x02\x02\u076F\u076B\x03\x02\x02\x02\u076F\u076C\x03\x02"+
		"\x02\x02\u076F\u076D\x03\x02\x02\x02\u076F\u076E\x03\x02\x02\x02\u0770"+
		"\u0165\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u0167\x03\x02"+
		"\x02\x02\u0773\u0790\x05\x02\x02\x02\u0774\u0779\x058\x1D\x02\u0775\u0776"+
		"\x07?\x02\x02\u0776\u0778\x07@\x02\x02\u0777\u0775\x03\x02\x02\x02\u0778"+
		"\u077B\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02\u0779\u077A\x03\x02"+
		"\x02\x02\u077A\u077C\x03\x02\x02\x02\u077B\u0779\x03\x02\x02\x02\u077C"+
		"\u077D\x07C\x02\x02\u077D\u077E\x07\v\x02\x02\u077E\u0790\x03\x02\x02"+
		"\x02\u077F\u0780\x072\x02\x02\u0780\u0781\x07C\x02\x02\u0781\u0790\x07"+
		"\v\x02\x02\u0782\u0790\x07-\x02\x02\u0783\u0784\x058\x1D\x02\u0784\u0785"+
		"\x07C\x02\x02\u0785\u0786\x07-\x02\x02\u0786\u0790\x03\x02\x02\x02\u0787"+
		"\u0788\x07;\x02\x02\u0788\u0789\x05\u01A0\xD1\x02\u0789\u078A\x07<\x02"+
		"\x02\u078A\u0790\x03\x02\x02\x02\u078B\u0790\x05\u0176\xBC\x02\u078C\u0790"+
		"\x05\u017E\xC0\x02\u078D\u0790\x05\u018A\xC6\x02\u078E\u0790\x05\u0192"+
		"\xCA\x02\u078F\u0773\x03\x02\x02\x02\u078F\u0774\x03\x02\x02\x02\u078F"+
		"\u077F\x03\x02\x02\x02\u078F\u0782\x03\x02\x02\x02\u078F\u0783\x03\x02"+
		"\x02\x02\u078F\u0787\x03\x02\x02\x02\u078F\u078B\x03\x02\x02\x02\u078F"+
		"\u078C\x03\x02\x02\x02\u078F\u078D\x03\x02\x02\x02\u078F\u078E\x03\x02"+
		"\x02\x02\u0790\u0169\x03\x02\x02\x02\u0791\u0797\x05\u0178\xBD\x02\u0792"+
		"\u0797\x05\u0180\xC1\x02\u0793\u0797\x05\u0186\xC4\x02\u0794\u0797\x05"+
		"\u018C\xC7\x02\u0795\u0797\x05\u0194\xCB\x02\u0796\u0791\x03\x02\x02\x02"+
		"\u0796\u0792\x03\x02\x02\x02\u0796\u0793\x03\x02\x02\x02\u0796\u0794\x03"+
		"\x02\x02\x02\u0796\u0795\x03\x02\x02\x02\u0797\u016B\x03\x02\x02\x02\u0798"+
		"\u0799\x03\x02\x02\x02\u0799\u016D\x03\x02\x02\x02\u079A\u079F\x05\u0178"+
		"\xBD\x02\u079B\u079F\x05\u0180\xC1\x02\u079C\u079F\x05\u018C\xC7\x02\u079D"+
		"\u079F\x05\u0194\xCB\x02\u079E\u079A\x03\x02\x02\x02\u079E\u079B\x03\x02"+
		"\x02\x02\u079E\u079C\x03\x02\x02\x02\u079E\u079D\x03\x02\x02\x02\u079F"+
		"\u016F\x03\x02\x02\x02\u07A0\u07C9\x05\x02\x02\x02\u07A1\u07A6\x058\x1D"+
		"\x02\u07A2\u07A3\x07?\x02\x02\u07A3\u07A5\x07@\x02\x02\u07A4\u07A2\x03"+
		"\x02\x02\x02\u07A5\u07A8\x03\x02\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A6"+
		"\u07A7\x03\x02\x02\x02\u07A7\u07A9\x03\x02\x02\x02\u07A8\u07A6\x03\x02"+
		"\x02\x02\u07A9\u07AA\x07C\x02\x02\u07AA\u07AB\x07\v\x02\x02\u07AB\u07C9"+
		"\x03\x02\x02\x02\u07AC\u07B1\x05x=\x02\u07AD\u07AE\x07?\x02\x02\u07AE"+
		"\u07B0\x07@\x02\x02\u07AF\u07AD\x03\x02\x02\x02\u07B0\u07B3\x03\x02\x02"+
		"\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02\u07B2\u07B4"+
		"\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B4\u07B5\x07C\x02\x02"+
		"\u07B5\u07B6\x07\v\x02\x02\u07B6\u07C9\x03\x02\x02\x02\u07B7\u07B8\x07"+
		"2\x02\x02\u07B8\u07B9\x07C\x02\x02\u07B9\u07C9\x07\v\x02\x02\u07BA\u07C9"+
		"\x07-\x02\x02\u07BB\u07BC\x058\x1D\x02\u07BC\u07BD\x07C\x02\x02\u07BD"+
		"\u07BE\x07-\x02\x02\u07BE\u07C9\x03\x02\x02\x02\u07BF\u07C0\x07;\x02\x02"+
		"\u07C0\u07C1\x05\u01A0\xD1\x02\u07C1\u07C2\x07<\x02\x02\u07C2\u07C9\x03"+
		"\x02\x02\x02\u07C3\u07C9\x05\u017A\xBE\x02\u07C4\u07C9\x05\u0182\xC2\x02"+
		"\u07C5\u07C9\x05\u0188\xC5\x02\u07C6\u07C9\x05\u018E\xC8\x02\u07C7\u07C9"+
		"\x05\u0196\xCC\x02\u07C8\u07A0\x03\x02\x02\x02\u07C8\u07A1\x03\x02\x02"+
		"\x02\u07C8\u07AC\x03\x02\x02\x02\u07C8\u07B7\x03\x02\x02\x02\u07C8\u07BA"+
		"\x03\x02\x02\x02\u07C8\u07BB\x03\x02\x02\x02\u07C8\u07BF\x03\x02\x02\x02"+
		"\u07C8\u07C3\x03\x02\x02\x02\u07C8\u07C4\x03\x02\x02\x02\u07C8\u07C5\x03"+
		"\x02\x02\x02\u07C8\u07C6\x03\x02\x02\x02\u07C8\u07C7\x03\x02\x02\x02\u07C9"+
		"\u0171\x03\x02\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB\u0173\x03\x02"+
		"\x02\x02\u07CC\u07F4\x05\x02\x02\x02\u07CD\u07D2\x058\x1D\x02\u07CE\u07CF"+
		"\x07?\x02\x02\u07CF\u07D1\x07@\x02\x02\u07D0\u07CE\x03\x02\x02\x02\u07D1"+
		"\u07D4\x03\x02\x02\x02\u07D2\u07D0\x03\x02\x02\x02\u07D2\u07D3\x03\x02"+
		"\x02\x02\u07D3\u07D5\x03\x02\x02\x02\u07D4\u07D2\x03\x02\x02\x02\u07D5"+
		"\u07D6\x07C\x02\x02\u07D6\u07D7\x07\v\x02\x02\u07D7\u07F4\x03\x02\x02"+
		"\x02\u07D8\u07DD\x05x=\x02\u07D9\u07DA\x07?\x02\x02\u07DA\u07DC\x07@\x02"+
		"\x02\u07DB\u07D9\x03\x02\x02\x02\u07DC\u07DF\x03\x02\x02\x02\u07DD\u07DB"+
		"\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02\u07DE\u07E0\x03\x02\x02\x02"+
		"\u07DF\u07DD\x03\x02\x02\x02\u07E0\u07E1\x07C\x02\x02\u07E1\u07E2\x07"+
		"\v\x02\x02\u07E2\u07F4\x03\x02\x02\x02\u07E3\u07E4\x072\x02\x02\u07E4"+
		"\u07E5\x07C\x02\x02\u07E5\u07F4\x07\v\x02\x02\u07E6\u07F4\x07-\x02\x02"+
		"\u07E7\u07E8\x058\x1D\x02\u07E8\u07E9\x07C\x02\x02\u07E9\u07EA\x07-\x02"+
		"\x02\u07EA\u07F4\x03\x02\x02\x02\u07EB\u07EC\x07;\x02\x02\u07EC\u07ED"+
		"\x05\u01A0\xD1\x02\u07ED\u07EE\x07<\x02\x02\u07EE\u07F4\x03\x02\x02\x02"+
		"\u07EF\u07F4\x05\u017A\xBE\x02\u07F0\u07F4\x05\u0182\xC2\x02\u07F1\u07F4"+
		"\x05\u018E\xC8\x02\u07F2\u07F4\x05\u0196\xCC\x02\u07F3\u07CC\x03\x02\x02"+
		"\x02\u07F3\u07CD\x03\x02\x02\x02\u07F3\u07D8\x03\x02\x02\x02\u07F3\u07E3"+
		"\x03\x02\x02\x02\u07F3\u07E6\x03\x02\x02\x02\u07F3\u07E7\x03\x02\x02\x02"+
		"\u07F3\u07EB\x03\x02\x02\x02\u07F3\u07EF\x03\x02\x02\x02\u07F3\u07F0\x03"+
		"\x02\x02\x02\u07F3\u07F1\x03\x02\x02\x02\u07F3\u07F2\x03\x02\x02\x02\u07F4"+
		"\u0175\x03\x02\x02\x02\u07F5\u07F7\x07!\x02\x02\u07F6\u07F8\x05,\x17\x02"+
		"\u07F7\u07F6\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02\u07F8\u07FC\x03"+
		"\x02\x02\x02\u07F9\u07FB\x05\xE8u\x02\u07FA\u07F9\x03\x02\x02\x02\u07FB"+
		"\u07FE\x03\x02\x02\x02\u07FC\u07FA\x03\x02\x02\x02\u07FC\u07FD\x03\x02"+
		"\x02\x02\u07FD\u07FF\x03\x02\x02\x02\u07FE\u07FC\x03\x02\x02\x02\u07FF"+
		"\u080A\x07h\x02\x02\u0800\u0804\x07C\x02\x02\u0801\u0803\x05\xE8u\x02"+
		"\u0802\u0801\x03\x02\x02\x02\u0803\u0806\x03\x02\x02\x02\u0804\u0802\x03"+
		"\x02\x02\x02\u0804\u0805\x03\x02\x02\x02\u0805\u0807\x03\x02\x02\x02\u0806"+
		"\u0804\x03\x02\x02\x02\u0807\u0809\x07h\x02\x02\u0808\u0800\x03\x02\x02"+
		"\x02\u0809\u080C\x03\x02\x02\x02\u080A\u0808\x03\x02\x02\x02\u080A\u080B"+
		"\x03\x02\x02\x02\u080B\u080E\x03\x02\x02\x02\u080C\u080A\x03\x02\x02\x02"+
		"\u080D\u080F\x05\u017C\xBF\x02\u080E\u080D\x03\x02\x02\x02\u080E\u080F"+
		"\x03\x02\x02\x02\u080F\u0810\x03\x02\x02\x02\u0810\u0812\x07;\x02\x02"+
		"\u0811\u0813\x05\u0190\xC9\x02\u0812\u0811\x03\x02\x02\x02\u0812\u0813"+
		"\x03\x02\x02\x02\u0813\u0814\x03\x02\x02\x02\u0814\u0816\x07<\x02\x02"+
		"\u0815\u0817\x05d3\x02\u0816\u0815\x03\x02\x02\x02\u0816\u0817\x03\x02"+
		"\x02\x02\u0817\u0849\x03\x02\x02\x02\u0818\u0819\x05<\x1F\x02\u0819\u081A"+
		"\x07C\x02\x02\u081A\u081C\x07!\x02\x02\u081B\u081D\x05,\x17\x02\u081C"+
		"\u081B\x03\x02\x02\x02\u081C\u081D\x03\x02\x02\x02\u081D\u0821\x03\x02"+
		"\x02\x02\u081E\u0820\x05\xE8u\x02\u081F\u081E\x03\x02\x02\x02\u0820\u0823"+
		"\x03\x02\x02\x02\u0821\u081F\x03\x02\x02\x02\u0821\u0822\x03\x02\x02\x02"+
		"\u0822\u0824\x03\x02\x02\x02\u0823\u0821\x03\x02\x02\x02\u0824\u0826\x07"+
		"h\x02\x02\u0825\u0827\x05\u017C\xBF\x02\u0826\u0825\x03\x02\x02\x02\u0826"+
		"\u0827\x03\x02\x02\x02\u0827\u0828\x03\x02\x02\x02\u0828\u082A\x07;\x02"+
		"\x02\u0829\u082B\x05\u0190\xC9\x02\u082A\u0829\x03\x02\x02\x02\u082A\u082B"+
		"\x03\x02\x02\x02\u082B\u082C\x03\x02\x02\x02\u082C\u082E\x07<\x02\x02"+
		"\u082D\u082F\x05d3\x02\u082E\u082D\x03\x02\x02\x02\u082E\u082F\x03\x02"+
		"\x02\x02\u082F\u0849\x03\x02\x02\x02\u0830\u0831\x05\u0162\xB2\x02\u0831"+
		"\u0832\x07C\x02\x02\u0832\u0834\x07!\x02\x02\u0833\u0835\x05,\x17\x02"+
		"\u0834\u0833\x03\x02\x02\x02\u0834\u0835\x03\x02\x02\x02\u0835\u0839\x03"+
		"\x02\x02\x02\u0836\u0838\x05\xE8u\x02\u0837\u0836\x03\x02\x02\x02\u0838"+
		"\u083B\x03\x02\x02\x02\u0839\u0837\x03\x02\x02\x02\u0839\u083A\x03\x02"+
		"\x02\x02\u083A\u083C\x03\x02\x02\x02\u083B\u0839\x03\x02\x02\x02\u083C"+
		"\u083E\x07h\x02\x02\u083D\u083F\x05\u017C\xBF\x02\u083E\u083D\x03\x02"+
		"\x02\x02\u083E\u083F\x03\x02\x02\x02\u083F\u0840\x03\x02\x02\x02\u0840"+
		"\u0842\x07;\x02\x02\u0841\u0843\x05\u0190\xC9\x02\u0842\u0841\x03\x02"+
		"\x02\x02\u0842\u0843\x03\x02\x02\x02\u0843\u0844\x03\x02\x02\x02\u0844"+
		"\u0846\x07<\x02\x02\u0845\u0847\x05";
	private static readonly _serializedATNSegment4: string =
		"d3\x02\u0846\u0845\x03\x02\x02\x02\u0846\u0847\x03\x02\x02\x02\u0847\u0849"+
		"\x03\x02\x02\x02\u0848\u07F5\x03\x02\x02\x02\u0848\u0818\x03\x02\x02\x02"+
		"\u0848\u0830\x03\x02\x02\x02\u0849\u0177\x03\x02\x02\x02\u084A\u084B\x07"+
		"C\x02\x02\u084B\u084D\x07!\x02\x02\u084C\u084E\x05,\x17\x02\u084D\u084C"+
		"\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E\u0852\x03\x02\x02\x02"+
		"\u084F\u0851\x05\xE8u\x02\u0850\u084F\x03\x02\x02\x02\u0851\u0854\x03"+
		"\x02\x02\x02\u0852\u0850\x03\x02\x02\x02\u0852\u0853\x03\x02\x02\x02\u0853"+
		"\u0855\x03\x02\x02\x02\u0854\u0852\x03\x02\x02\x02\u0855\u0857\x07h\x02"+
		"\x02\u0856\u0858\x05\u017C\xBF\x02\u0857\u0856\x03\x02\x02\x02\u0857\u0858"+
		"\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02\u0859\u085B\x07;\x02\x02"+
		"\u085A\u085C\x05\u0190\xC9\x02\u085B\u085A\x03\x02\x02\x02\u085B\u085C"+
		"\x03\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D\u085F\x07<\x02\x02"+
		"\u085E\u0860\x05d3\x02\u085F\u085E\x03\x02\x02\x02\u085F\u0860\x03\x02"+
		"\x02\x02\u0860\u0179\x03\x02\x02\x02\u0861\u0863\x07!\x02\x02\u0862\u0864"+
		"\x05,\x17\x02\u0863\u0862\x03\x02\x02\x02\u0863\u0864\x03\x02\x02\x02"+
		"\u0864\u0868\x03\x02\x02\x02\u0865\u0867\x05\xE8u\x02\u0866\u0865\x03"+
		"\x02\x02\x02\u0867\u086A\x03\x02\x02\x02\u0868\u0866\x03\x02\x02\x02\u0868"+
		"\u0869\x03\x02\x02\x02\u0869\u086B\x03\x02\x02\x02\u086A\u0868\x03\x02"+
		"\x02\x02\u086B\u0876\x07h\x02\x02\u086C\u0870\x07C\x02\x02\u086D\u086F"+
		"\x05\xE8u\x02\u086E\u086D\x03\x02\x02\x02\u086F\u0872\x03\x02\x02\x02"+
		"\u0870\u086E\x03\x02\x02\x02\u0870\u0871\x03\x02\x02\x02\u0871\u0873\x03"+
		"\x02\x02\x02\u0872\u0870\x03\x02\x02\x02\u0873\u0875\x07h\x02\x02\u0874"+
		"\u086C\x03\x02\x02\x02\u0875\u0878\x03\x02\x02\x02\u0876\u0874\x03\x02"+
		"\x02\x02\u0876\u0877\x03\x02\x02\x02\u0877\u087A\x03\x02\x02\x02\u0878"+
		"\u0876\x03\x02\x02\x02\u0879\u087B\x05\u017C\xBF\x02\u087A\u0879\x03\x02"+
		"\x02\x02\u087A\u087B\x03\x02\x02\x02\u087B\u087C\x03\x02\x02\x02\u087C"+
		"\u087E\x07;\x02\x02\u087D\u087F\x05\u0190\xC9\x02\u087E\u087D\x03\x02"+
		"\x02\x02\u087E\u087F\x03\x02\x02\x02\u087F\u0880\x03\x02\x02\x02\u0880"+
		"\u0882\x07<\x02\x02\u0881\u0883\x05d3\x02\u0882\u0881\x03\x02\x02\x02"+
		"\u0882\u0883\x03\x02\x02\x02\u0883\u089D\x03\x02\x02\x02\u0884\u0885\x05"+
		"<\x1F\x02\u0885\u0886\x07C\x02\x02\u0886\u0888\x07!\x02\x02\u0887\u0889"+
		"\x05,\x17\x02\u0888\u0887\x03\x02\x02\x02\u0888\u0889\x03\x02\x02\x02"+
		"\u0889\u088D\x03\x02\x02\x02\u088A\u088C\x05\xE8u\x02\u088B\u088A\x03"+
		"\x02\x02\x02\u088C\u088F\x03\x02\x02\x02\u088D\u088B\x03\x02\x02\x02\u088D"+
		"\u088E\x03\x02\x02\x02\u088E\u0890\x03\x02\x02\x02\u088F\u088D\x03\x02"+
		"\x02\x02\u0890\u0892\x07h\x02\x02\u0891\u0893\x05\u017C\xBF\x02\u0892"+
		"\u0891\x03\x02\x02\x02\u0892\u0893\x03\x02\x02\x02\u0893\u0894\x03\x02"+
		"\x02\x02\u0894\u0896\x07;\x02\x02\u0895\u0897\x05\u0190\xC9\x02\u0896"+
		"\u0895\x03\x02\x02\x02\u0896\u0897\x03\x02\x02\x02\u0897\u0898\x03\x02"+
		"\x02\x02\u0898\u089A\x07<\x02\x02\u0899\u089B\x05d3\x02\u089A\u0899\x03"+
		"\x02\x02\x02\u089A\u089B\x03\x02\x02\x02\u089B\u089D\x03\x02\x02\x02\u089C"+
		"\u0861\x03\x02\x02\x02\u089C\u0884\x03\x02\x02\x02\u089D\u017B\x03\x02"+
		"\x02\x02\u089E\u08A2\x05,\x17\x02\u089F\u08A0\x07F\x02\x02\u08A0\u08A2"+
		"\x07E\x02\x02\u08A1\u089E\x03\x02\x02\x02\u08A1\u089F\x03\x02\x02\x02"+
		"\u08A2\u017D\x03\x02\x02\x02\u08A3\u08A4\x05\u0162\xB2\x02\u08A4\u08A5"+
		"\x07C\x02\x02\u08A5\u08A6\x07h\x02\x02\u08A6\u08B1\x03\x02\x02\x02\u08A7"+
		"\u08A8\x07*\x02\x02\u08A8\u08A9\x07C\x02\x02\u08A9\u08B1\x07h\x02\x02"+
		"\u08AA\u08AB\x058\x1D\x02\u08AB\u08AC\x07C\x02\x02\u08AC\u08AD\x07*\x02"+
		"\x02\u08AD\u08AE\x07C\x02\x02\u08AE\u08AF\x07h\x02\x02\u08AF\u08B1\x03"+
		"\x02\x02\x02\u08B0\u08A3\x03\x02\x02\x02\u08B0\u08A7\x03\x02\x02\x02\u08B0"+
		"\u08AA\x03\x02\x02\x02\u08B1\u017F\x03\x02\x02\x02\u08B2\u08B3\x07C\x02"+
		"\x02\u08B3\u08B4\x07h\x02\x02\u08B4\u0181\x03\x02\x02\x02\u08B5\u08B6"+
		"\x07*\x02\x02\u08B6\u08B7\x07C\x02\x02\u08B7\u08BF\x07h\x02\x02\u08B8"+
		"\u08B9\x058\x1D\x02\u08B9\u08BA\x07C\x02\x02\u08BA\u08BB\x07*\x02\x02"+
		"\u08BB\u08BC\x07C\x02\x02\u08BC\u08BD\x07h\x02\x02\u08BD\u08BF\x03\x02"+
		"\x02\x02\u08BE\u08B5\x03\x02\x02\x02\u08BE\u08B8\x03\x02\x02\x02\u08BF"+
		"\u0183\x03\x02\x02\x02\u08C0\u08C1\x05<\x1F\x02\u08C1\u08C2\x07?\x02\x02"+
		"\u08C2\u08C3\x05\u01A0\xD1\x02\u08C3\u08C4\x07@\x02\x02\u08C4\u08CB\x03"+
		"\x02\x02\x02\u08C5\u08C6\x05\u0168\xB5\x02\u08C6\u08C7\x07?\x02\x02\u08C7"+
		"\u08C8\x05\u01A0\xD1\x02\u08C8\u08C9\x07@\x02\x02\u08C9\u08CB\x03\x02"+
		"\x02\x02\u08CA\u08C0\x03\x02\x02\x02\u08CA\u08C5\x03\x02\x02\x02\u08CB"+
		"\u08D3\x03\x02\x02\x02\u08CC\u08CD\x05\u0166\xB4\x02\u08CD\u08CE\x07?"+
		"\x02\x02\u08CE\u08CF\x05\u01A0\xD1\x02\u08CF\u08D0\x07@\x02\x02\u08D0"+
		"\u08D2\x03\x02\x02\x02\u08D1\u08CC\x03\x02\x02\x02\u08D2\u08D5\x03\x02"+
		"\x02\x02\u08D3\u08D1\x03\x02\x02\x02\u08D3\u08D4\x03\x02\x02\x02\u08D4"+
		"\u0185\x03\x02\x02\x02\u08D5\u08D3\x03\x02\x02\x02\u08D6\u08D7\x05\u016E"+
		"\xB8\x02\u08D7\u08D8\x07?\x02\x02\u08D8\u08D9\x05\u01A0\xD1\x02\u08D9"+
		"\u08DA\x07@\x02\x02\u08DA\u08E2\x03\x02\x02\x02\u08DB\u08DC\x05\u016C"+
		"\xB7\x02\u08DC\u08DD\x07?\x02\x02\u08DD\u08DE\x05\u01A0\xD1\x02\u08DE"+
		"\u08DF\x07@\x02\x02\u08DF\u08E1\x03\x02\x02\x02\u08E0\u08DB\x03\x02\x02"+
		"\x02\u08E1\u08E4\x03\x02\x02\x02\u08E2\u08E0\x03\x02\x02\x02\u08E2\u08E3"+
		"\x03\x02\x02\x02\u08E3\u0187\x03\x02\x02\x02\u08E4\u08E2\x03\x02\x02\x02"+
		"\u08E5\u08E6\x05<\x1F\x02\u08E6\u08E7\x07?\x02\x02\u08E7\u08E8\x05\u01A0"+
		"\xD1\x02\u08E8\u08E9\x07@\x02\x02\u08E9\u08F0\x03\x02\x02\x02\u08EA\u08EB"+
		"\x05\u0174\xBB\x02\u08EB\u08EC\x07?\x02\x02\u08EC\u08ED\x05\u01A0\xD1"+
		"\x02\u08ED\u08EE\x07@\x02\x02\u08EE\u08F0\x03\x02\x02\x02\u08EF\u08E5"+
		"\x03\x02\x02\x02\u08EF\u08EA\x03\x02\x02\x02\u08F0\u08F8\x03\x02\x02\x02"+
		"\u08F1\u08F2\x05\u0172\xBA\x02\u08F2\u08F3\x07?\x02\x02\u08F3\u08F4\x05"+
		"\u01A0\xD1\x02\u08F4\u08F5\x07@\x02\x02\u08F5\u08F7\x03\x02\x02\x02\u08F6"+
		"\u08F1\x03\x02\x02\x02\u08F7\u08FA\x03\x02\x02\x02\u08F8\u08F6\x03\x02"+
		"\x02\x02\u08F8\u08F9\x03\x02\x02\x02\u08F9\u0189\x03\x02\x02\x02\u08FA"+
		"\u08F8\x03\x02\x02\x02\u08FB\u08FC\x05> \x02\u08FC\u08FE\x07;\x02\x02"+
		"\u08FD\u08FF\x05\u0190\xC9\x02\u08FE\u08FD\x03\x02\x02\x02\u08FE\u08FF"+
		"\x03\x02\x02\x02\u08FF\u0900\x03\x02\x02\x02\u0900\u0901\x07<\x02\x02"+
		"\u0901\u0940\x03\x02\x02\x02\u0902\u0903\x058\x1D\x02\u0903\u0905\x07"+
		"C\x02\x02\u0904\u0906\x05,\x17\x02\u0905\u0904\x03\x02\x02\x02\u0905\u0906"+
		"\x03\x02\x02\x02\u0906\u0907\x03\x02\x02\x02\u0907\u0908\x07h\x02\x02"+
		"\u0908\u090A\x07;\x02\x02\u0909\u090B\x05\u0190\xC9\x02\u090A\u0909\x03"+
		"\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u090C\x03\x02\x02\x02\u090C"+
		"\u090D\x07<\x02\x02\u090D\u0940\x03\x02\x02\x02\u090E\u090F\x05<\x1F\x02"+
		"\u090F\u0911\x07C\x02\x02\u0910\u0912\x05,\x17\x02\u0911\u0910\x03\x02"+
		"\x02\x02\u0911\u0912\x03\x02\x02\x02\u0912\u0913\x03\x02\x02\x02\u0913"+
		"\u0914\x07h\x02\x02\u0914\u0916\x07;\x02\x02\u0915\u0917\x05\u0190\xC9"+
		"\x02\u0916\u0915\x03\x02\x02\x02\u0916\u0917\x03\x02\x02\x02\u0917\u0918"+
		"\x03\x02\x02\x02\u0918\u0919\x07<\x02\x02\u0919\u0940\x03\x02\x02\x02"+
		"\u091A\u091B\x05\u0162\xB2\x02\u091B\u091D\x07C\x02\x02\u091C\u091E\x05"+
		",\x17\x02\u091D\u091C\x03\x02\x02\x02\u091D\u091E\x03\x02\x02\x02\u091E"+
		"\u091F\x03\x02\x02\x02\u091F\u0920\x07h\x02\x02\u0920\u0922\x07;\x02\x02"+
		"\u0921\u0923\x05\u0190\xC9\x02\u0922\u0921\x03\x02\x02\x02\u0922\u0923"+
		"\x03\x02\x02\x02\u0923\u0924\x03\x02\x02\x02\u0924\u0925\x07<\x02\x02"+
		"\u0925\u0940\x03\x02\x02\x02\u0926\u0927\x07*\x02\x02\u0927\u0929\x07"+
		"C\x02\x02\u0928\u092A\x05,\x17\x02\u0929\u0928\x03\x02\x02\x02\u0929\u092A"+
		"\x03\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u092C\x07h\x02\x02"+
		"\u092C\u092E\x07;\x02\x02\u092D\u092F\x05\u0190\xC9\x02\u092E\u092D\x03"+
		"\x02\x02\x02\u092E\u092F\x03\x02\x02\x02\u092F\u0930\x03\x02\x02\x02\u0930"+
		"\u0940\x07<\x02\x02\u0931\u0932\x058\x1D\x02\u0932\u0933\x07C\x02\x02"+
		"\u0933\u0934\x07*\x02\x02\u0934\u0936\x07C\x02\x02\u0935\u0937\x05,\x17"+
		"\x02\u0936\u0935\x03\x02\x02\x02\u0936\u0937\x03\x02\x02\x02\u0937\u0938"+
		"\x03\x02\x02\x02\u0938\u0939\x07h\x02\x02\u0939\u093B\x07;\x02\x02\u093A"+
		"\u093C\x05\u0190\xC9\x02\u093B\u093A\x03\x02\x02\x02\u093B\u093C\x03\x02"+
		"\x02\x02\u093C\u093D\x03\x02\x02\x02\u093D\u093E\x07<\x02\x02\u093E\u0940"+
		"\x03\x02\x02\x02\u093F\u08FB\x03\x02\x02\x02\u093F\u0902\x03\x02\x02\x02"+
		"\u093F\u090E\x03\x02\x02\x02\u093F\u091A\x03\x02\x02\x02\u093F\u0926\x03"+
		"\x02\x02\x02\u093F\u0931\x03\x02\x02\x02\u0940\u018B\x03\x02\x02\x02\u0941"+
		"\u0943\x07C\x02\x02\u0942\u0944\x05,\x17\x02\u0943\u0942\x03\x02\x02\x02"+
		"\u0943\u0944\x03\x02\x02\x02\u0944\u0945\x03\x02\x02\x02\u0945\u0946\x07"+
		"h\x02\x02\u0946\u0948\x07;\x02\x02\u0947\u0949\x05\u0190\xC9\x02\u0948"+
		"\u0947\x03\x02\x02\x02\u0948\u0949\x03\x02\x02\x02\u0949\u094A\x03\x02"+
		"\x02\x02\u094A\u094B\x07<\x02\x02\u094B\u018D\x03\x02\x02\x02\u094C\u094D"+
		"\x05> \x02\u094D\u094F\x07;\x02\x02\u094E\u0950\x05\u0190\xC9\x02\u094F"+
		"\u094E\x03\x02\x02\x02\u094F\u0950\x03\x02\x02\x02\u0950\u0951\x03\x02"+
		"\x02\x02\u0951\u0952\x07<\x02\x02\u0952\u0985\x03\x02\x02\x02\u0953\u0954"+
		"\x058\x1D\x02\u0954\u0956\x07C\x02\x02\u0955\u0957\x05,\x17\x02\u0956"+
		"\u0955\x03\x02\x02\x02\u0956\u0957\x03\x02\x02\x02\u0957\u0958\x03\x02"+
		"\x02\x02\u0958\u0959\x07h\x02\x02\u0959\u095B\x07;\x02\x02\u095A\u095C"+
		"\x05\u0190\xC9\x02\u095B\u095A\x03\x02\x02\x02\u095B\u095C\x03\x02\x02"+
		"\x02\u095C\u095D\x03\x02\x02\x02\u095D\u095E\x07<\x02\x02\u095E\u0985"+
		"\x03\x02\x02\x02\u095F\u0960\x05<\x1F\x02\u0960\u0962\x07C\x02\x02\u0961"+
		"\u0963\x05,\x17\x02\u0962\u0961\x03\x02\x02\x02\u0962\u0963\x03\x02\x02"+
		"\x02\u0963\u0964\x03\x02\x02\x02\u0964\u0965\x07h\x02\x02\u0965\u0967"+
		"\x07;\x02\x02\u0966\u0968\x05\u0190\xC9\x02\u0967\u0966\x03\x02\x02\x02"+
		"\u0967\u0968\x03\x02\x02\x02\u0968\u0969\x03\x02\x02\x02\u0969\u096A\x07"+
		"<\x02\x02\u096A\u0985\x03\x02\x02\x02\u096B\u096C\x07*\x02\x02\u096C\u096E"+
		"\x07C\x02\x02\u096D\u096F\x05,\x17\x02\u096E\u096D\x03\x02\x02\x02\u096E"+
		"\u096F\x03\x02\x02\x02\u096F\u0970\x03\x02\x02\x02\u0970\u0971\x07h\x02"+
		"\x02\u0971\u0973\x07;\x02\x02\u0972\u0974\x05\u0190\xC9\x02\u0973\u0972"+
		"\x03\x02\x02\x02\u0973\u0974\x03\x02\x02\x02\u0974\u0975\x03\x02\x02\x02"+
		"\u0975\u0985\x07<\x02\x02\u0976\u0977\x058\x1D\x02\u0977\u0978\x07C\x02"+
		"\x02\u0978\u0979\x07*\x02\x02\u0979\u097B\x07C\x02\x02\u097A\u097C\x05"+
		",\x17\x02\u097B\u097A\x03\x02\x02\x02\u097B\u097C\x03\x02\x02\x02\u097C"+
		"\u097D\x03\x02\x02\x02\u097D\u097E\x07h\x02\x02\u097E\u0980\x07;\x02\x02"+
		"\u097F\u0981\x05\u0190\xC9\x02\u0980\u097F\x03\x02\x02\x02\u0980\u0981"+
		"\x03\x02\x02\x02\u0981\u0982\x03\x02\x02\x02\u0982\u0983\x07<\x02\x02"+
		"\u0983\u0985\x03\x02\x02\x02\u0984\u094C\x03\x02\x02\x02\u0984\u0953\x03"+
		"\x02\x02\x02\u0984\u095F\x03\x02\x02\x02\u0984\u096B\x03\x02\x02\x02\u0984"+
		"\u0976\x03\x02\x02\x02\u0985\u018F\x03\x02\x02\x02\u0986\u098B\x05\u01A0"+
		"\xD1\x02\u0987\u0988\x07B\x02\x02\u0988\u098A\x05\u01A0\xD1\x02\u0989"+
		"\u0987\x03\x02\x02\x02\u098A\u098D\x03\x02\x02\x02\u098B\u0989\x03\x02"+
		"\x02\x02\u098B\u098C\x03\x02\x02\x02\u098C\u0191\x03\x02\x02\x02\u098D"+
		"\u098B\x03\x02\x02\x02\u098E\u098F\x05<\x1F\x02\u098F\u0991\x07\\\x02"+
		"\x02\u0990\u0992\x05,\x17\x02\u0991\u0990\x03\x02\x02\x02\u0991\u0992"+
		"\x03\x02\x02\x02\u0992\u0993\x03\x02\x02\x02\u0993\u0994\x07h\x02\x02"+
		"\u0994\u09BE\x03\x02\x02\x02\u0995\u0996\x05\x0E\b\x02\u0996\u0998\x07"+
		"\\\x02\x02\u0997\u0999\x05,\x17\x02\u0998\u0997\x03\x02\x02\x02\u0998"+
		"\u0999\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A\u099B\x07h\x02"+
		"\x02\u099B\u09BE\x03\x02\x02\x02\u099C\u099D\x05\u0162\xB2\x02\u099D\u099F"+
		"\x07\\\x02\x02\u099E\u09A0\x05,\x17\x02\u099F\u099E\x03\x02\x02\x02\u099F"+
		"\u09A0\x03\x02\x02\x02\u09A0\u09A1\x03\x02\x02\x02\u09A1\u09A2\x07h\x02"+
		"\x02\u09A2\u09BE\x03\x02\x02\x02\u09A3\u09A4\x07*\x02\x02\u09A4\u09A6"+
		"\x07\\\x02\x02\u09A5\u09A7\x05,\x17\x02\u09A6\u09A5\x03\x02\x02\x02\u09A6"+
		"\u09A7\x03\x02\x02\x02\u09A7\u09A8\x03\x02\x02\x02\u09A8\u09BE\x07h\x02"+
		"\x02\u09A9\u09AA\x058\x1D\x02\u09AA\u09AB\x07C\x02\x02\u09AB\u09AC\x07"+
		"*\x02\x02\u09AC\u09AE\x07\\\x02\x02\u09AD\u09AF\x05,\x17\x02\u09AE\u09AD"+
		"\x03\x02\x02\x02\u09AE\u09AF\x03\x02\x02\x02\u09AF\u09B0\x03\x02\x02\x02"+
		"\u09B0\u09B1\x07h\x02\x02\u09B1\u09BE\x03\x02\x02\x02\u09B2\u09B3\x05"+
		"\x12\n\x02\u09B3\u09B5\x07\\\x02\x02\u09B4\u09B6\x05,\x17\x02\u09B5\u09B4"+
		"\x03\x02\x02\x02\u09B5\u09B6\x03\x02\x02\x02\u09B6\u09B7\x03\x02\x02\x02"+
		"\u09B7\u09B8\x07!\x02\x02\u09B8\u09BE\x03\x02\x02\x02\u09B9\u09BA\x05"+
		" \x11\x02\u09BA\u09BB\x07\\\x02\x02\u09BB\u09BC\x07!\x02\x02\u09BC\u09BE"+
		"\x03\x02\x02\x02\u09BD\u098E\x03\x02\x02\x02\u09BD\u0995\x03\x02\x02\x02"+
		"\u09BD\u099C\x03\x02\x02\x02\u09BD\u09A3\x03\x02\x02\x02\u09BD\u09A9\x03"+
		"\x02\x02\x02\u09BD\u09B2\x03\x02\x02\x02\u09BD\u09B9\x03\x02\x02\x02\u09BE"+
		"\u0193\x03\x02\x02\x02\u09BF\u09C1\x07\\\x02\x02\u09C0\u09C2\x05,\x17"+
		"\x02\u09C1\u09C0\x03\x02\x02\x02\u09C1\u09C2\x03\x02\x02\x02\u09C2\u09C3"+
		"\x03\x02\x02\x02\u09C3\u09C4\x07h\x02\x02\u09C4\u0195\x03\x02\x02\x02"+
		"\u09C5\u09C6\x05<\x1F\x02\u09C6\u09C8\x07\\\x02\x02\u09C7\u09C9\x05,\x17"+
		"\x02\u09C8\u09C7\x03\x02\x02\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09CA"+
		"\x03\x02\x02\x02\u09CA\u09CB\x07h\x02\x02\u09CB\u09EE\x03\x02\x02\x02"+
		"\u09CC\u09CD\x05\x0E\b\x02\u09CD\u09CF\x07\\\x02\x02\u09CE\u09D0\x05,"+
		"\x17\x02\u09CF\u09CE\x03\x02\x02\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0"+
		"\u09D1\x03\x02\x02\x02\u09D1\u09D2\x07h\x02\x02\u09D2\u09EE\x03\x02\x02"+
		"\x02\u09D3\u09D4\x07*\x02\x02\u09D4\u09D6\x07\\\x02\x02\u09D5\u09D7\x05"+
		",\x17\x02\u09D6\u09D5\x03\x02\x02\x02\u09D6\u09D7\x03\x02\x02\x02\u09D7"+
		"\u09D8\x03\x02\x02\x02\u09D8\u09EE\x07h\x02\x02\u09D9\u09DA\x058\x1D\x02"+
		"\u09DA\u09DB\x07C\x02\x02\u09DB\u09DC\x07*\x02\x02\u09DC\u09DE\x07\\\x02"+
		"\x02\u09DD\u09DF\x05,\x17\x02\u09DE\u09DD\x03\x02\x02\x02\u09DE\u09DF"+
		"\x03\x02\x02\x02\u09DF\u09E0\x03\x02\x02\x02\u09E0\u09E1\x07h\x02\x02"+
		"\u09E1\u09EE\x03\x02\x02\x02\u09E2\u09E3\x05\x12\n\x02\u09E3\u09E5\x07"+
		"\\\x02\x02\u09E4\u09E6\x05,\x17\x02\u09E5\u09E4\x03\x02\x02\x02\u09E5"+
		"\u09E6\x03\x02\x02\x02\u09E6\u09E7\x03\x02\x02\x02\u09E7\u09E8\x07!\x02"+
		"\x02\u09E8\u09EE\x03\x02\x02\x02\u09E9\u09EA\x05 \x11\x02\u09EA\u09EB"+
		"\x07\\\x02\x02\u09EB\u09EC\x07!\x02\x02\u09EC\u09EE\x03\x02\x02\x02\u09ED"+
		"\u09C5\x03\x02\x02\x02\u09ED\u09CC\x03\x02\x02\x02\u09ED\u09D3\x03\x02"+
		"\x02\x02\u09ED\u09D9\x03\x02\x02\x02\u09ED\u09E2\x03\x02\x02\x02\u09ED"+
		"\u09E9\x03\x02\x02\x02\u09EE\u0197\x03\x02\x02\x02\u09EF\u09F0\x07!\x02"+
		"\x02\u09F0\u09F1\x05\x06\x04\x02\u09F1\u09F3\x05\u019A\xCE\x02\u09F2\u09F4"+
		"\x05\"\x12\x02\u09F3\u09F2\x03\x02\x02\x02\u09F3\u09F4\x03\x02\x02\x02"+
		"\u09F4\u0A06\x03\x02\x02\x02\u09F5\u09F6\x07!\x02\x02\u09F6\u09F7\x05"+
		"\x10\t\x02\u09F7\u09F9\x05\u019A\xCE\x02\u09F8\u09FA\x05\"\x12\x02\u09F9"+
		"\u09F8\x03\x02\x02\x02\u09F9\u09FA\x03\x02\x02\x02\u09FA\u0A06\x03\x02"+
		"\x02\x02\u09FB\u09FC\x07!\x02\x02\u09FC\u09FD\x05\x06\x04\x02\u09FD\u09FE"+
		"\x05\"\x12\x02\u09FE\u09FF\x05\xFA~\x02\u09FF\u0A06\x03\x02\x02\x02\u0A00"+
		"\u0A01\x07!\x02\x02\u0A01\u0A02\x05\x10\t\x02\u0A02\u0A03\x05\"\x12\x02"+
		"\u0A03\u0A04\x05\xFA~\x02\u0A04\u0A06\x03\x02\x02\x02\u0A05\u09EF\x03"+
		"\x02\x02\x02\u0A05\u09F5\x03\x02\x02\x02\u0A05\u09FB\x03\x02\x02\x02\u0A05"+
		"\u0A00\x03\x02\x02\x02\u0A06\u0199\x03\x02\x02\x02\u0A07\u0A0B\x05\u019C"+
		"\xCF\x02\u0A08\u0A0A\x05\u019C\xCF\x02\u0A09\u0A08\x03\x02\x02\x02\u0A0A"+
		"\u0A0D\x03\x02\x02\x02\u0A0B\u0A09\x03\x02\x02\x02\u0A0B\u0A0C\x03\x02"+
		"\x02\x02\u0A0C\u019B\x03\x02\x02\x02\u0A0D\u0A0B\x03\x02\x02\x02\u0A0E"+
		"\u0A10\x05\xE8u\x02\u0A0F\u0A0E\x03\x02\x02\x02\u0A10\u0A13\x03\x02\x02"+
		"\x02\u0A11\u0A0F\x03\x02\x02\x02\u0A11\u0A12\x03\x02\x02\x02\u0A12\u0A14"+
		"\x03\x02\x02\x02\u0A13\u0A11\x03\x02\x02\x02\u0A14\u0A15\x07?\x02\x02"+
		"\u0A15\u0A16\x05\u01A0\xD1\x02\u0A16\u0A17\x07@\x02\x02\u0A17\u019D\x03"+
		"\x02\x02\x02\u0A18\u0A19\x05\u01A0\xD1\x02\u0A19\u019F\x03\x02\x02\x02"+
		"\u0A1A\u0A1D\x05\u01A2\xD2\x02\u0A1B\u0A1D\x05\u01AA\xD6\x02\u0A1C\u0A1A"+
		"\x03\x02\x02\x02\u0A1C\u0A1B\x03\x02\x02\x02\u0A1D\u01A1\x03\x02\x02\x02"+
		"\u0A1E\u0A1F\x05\u01A4\xD3\x02\u0A1F\u0A20\x07[\x02\x02\u0A20\u0A21\x05"+
		"\u01A8\xD5\x02\u0A21\u01A3\x03\x02\x02\x02\u0A22\u0A2D\x07h\x02\x02\u0A23"+
		"\u0A25\x07;\x02\x02\u0A24\u0A26\x05\x98M\x02\u0A25\u0A24\x03\x02\x02\x02"+
		"\u0A25\u0A26\x03\x02\x02\x02\u0A26\u0A27\x03\x02\x02\x02\u0A27\u0A2D\x07"+
		"<\x02\x02\u0A28\u0A29\x07;\x02\x02\u0A29\u0A2A\x05\u01A6\xD4\x02\u0A2A"+
		"\u0A2B\x07<\x02\x02\u0A2B\u0A2D\x03\x02\x02\x02\u0A2C\u0A22\x03\x02\x02"+
		"\x02\u0A2C\u0A23\x03\x02\x02\x02\u0A2C\u0A28\x03\x02\x02\x02\u0A2D\u01A5"+
		"\x03\x02\x02\x02\u0A2E\u0A33\x07h\x02\x02\u0A2F\u0A30\x07B\x02\x02\u0A30"+
		"\u0A32\x07h\x02\x02\u0A31\u0A2F\x03\x02\x02\x02\u0A32\u0A35\x03\x02\x02"+
		"\x02\u0A33\u0A31\x03\x02\x02\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34\u01A7"+
		"\x03\x02\x02\x02\u0A35\u0A33\x03\x02\x02\x02\u0A36\u0A39\x05\u01A0\xD1"+
		"\x02\u0A37\u0A39\x05\xFE\x80\x02\u0A38\u0A36\x03\x02\x02\x02\u0A38\u0A37"+
		"\x03\x02\x02\x02\u0A39\u01A9\x03\x02\x02\x02\u0A3A\u0A3D\x05\u01B2\xDA"+
		"\x02\u0A3B\u0A3D\x05\u01AC\xD7\x02\u0A3C\u0A3A\x03\x02\x02\x02\u0A3C\u0A3B"+
		"\x03\x02\x02\x02\u0A3D\u01AB\x03\x02\x02\x02\u0A3E\u0A3F\x05\u01AE\xD8"+
		"\x02\u0A3F\u0A40\x05\u01B0\xD9\x02\u0A40\u0A41\x05\u01A0\xD1\x02\u0A41"+
		"\u01AD\x03\x02\x02\x02\u0A42\u0A46\x05<\x1F\x02\u0A43\u0A46\x05\u017E"+
		"\xC0\x02\u0A44\u0A46\x05\u0184\xC3\x02\u0A45\u0A42\x03\x02\x02\x02\u0A45"+
		"\u0A43\x03\x02\x02\x02\u0A45\u0A44\x03\x02\x02\x02\u0A46\u01AF\x03\x02"+
		"\x02\x02\u0A47\u0A48\t\x05\x02\x02\u0A48\u01B1\x03\x02\x02\x02\u0A49\u0A51"+
		"\x05\u01B4\xDB\x02\u0A4A\u0A4B\x05\u01B4\xDB\x02\u0A4B\u0A4C\x07I\x02"+
		"\x02\u0A4C\u0A4D\x05\u01A0\xD1\x02\u0A4D\u0A4E\x07J\x02\x02\u0A4E\u0A4F"+
		"\x05\u01B2\xDA\x02\u0A4F\u0A51\x03\x02\x02\x02\u0A50\u0A49\x03\x02\x02"+
		"\x02\u0A50\u0A4A\x03\x02\x02\x02\u0A51\u01B3\x03\x02\x02\x02\u0A52\u0A53"+
		"\b\xDB\x01\x02\u0A53\u0A54\x05\u01B6\xDC\x02\u0A54\u0A5A\x03\x02\x02\x02"+
		"\u0A55\u0A56\f\x03\x02\x02\u0A56\u0A57\x07P\x02\x02\u0A57\u0A59\x05\u01B6"+
		"\xDC\x02\u0A58\u0A55\x03\x02\x02\x02\u0A59\u0A5C\x03\x02\x02\x02\u0A5A"+
		"\u0A58\x03\x02\x02\x02\u0A5A\u0A5B\x03\x02\x02\x02\u0A5B\u01B5\x03\x02"+
		"\x02\x02\u0A5C\u0A5A\x03\x02\x02\x02\u0A5D\u0A5E\b\xDC\x01\x02\u0A5E\u0A5F"+
		"\x05\u01B8\xDD\x02\u0A5F\u0A65\x03\x02\x02\x02\u0A60\u0A61\f\x03\x02\x02"+
		"\u0A61\u0A62\x07O\x02\x02\u0A62\u0A64\x05\u01B8\xDD\x02\u0A63\u0A60\x03"+
		"\x02\x02\x02\u0A64\u0A67\x03\x02\x02\x02\u0A65\u0A63\x03\x02\x02\x02\u0A65"+
		"\u0A66\x03\x02\x02\x02\u0A66\u01B7\x03\x02\x02\x02\u0A67\u0A65\x03\x02"+
		"\x02\x02\u0A68\u0A69\b\xDD\x01\x02\u0A69\u0A6A\x05\u01BA\xDE\x02\u0A6A"+
		"\u0A70\x03\x02\x02\x02\u0A6B\u0A6C\f\x03\x02\x02\u0A6C\u0A6D\x07X\x02"+
		"\x02\u0A6D\u0A6F\x05\u01BA\xDE\x02\u0A6E\u0A6B\x03\x02\x02\x02\u0A6F\u0A72"+
		"\x03\x02\x02\x02\u0A70\u0A6E\x03\x02\x02\x02\u0A70\u0A71\x03\x02\x02\x02"+
		"\u0A71\u01B9\x03\x02\x02\x02\u0A72\u0A70\x03\x02\x02\x02\u0A73\u0A74\b"+
		"\xDE\x01\x02\u0A74\u0A75\x05\u01BC\xDF\x02\u0A75\u0A7B\x03\x02\x02\x02"+
		"\u0A76\u0A77\f\x03\x02\x02\u0A77\u0A78\x07Y\x02\x02\u0A78\u0A7A\x05\u01BC"+
		"\xDF\x02\u0A79\u0A76\x03\x02\x02\x02\u0A7A\u0A7D\x03\x02\x02\x02\u0A7B"+
		"\u0A79\x03\x02\x02\x02\u0A7B\u0A7C\x03\x02\x02\x02\u0A7C\u01BB\x03\x02"+
		"\x02\x02\u0A7D\u0A7B\x03\x02\x02\x02\u0A7E\u0A7F\b\xDF\x01\x02\u0A7F\u0A80"+
		"\x05\u01BE\xE0\x02\u0A80\u0A86\x03\x02\x02\x02\u0A81\u0A82\f\x03\x02\x02"+
		"\u0A82\u0A83\x07W\x02\x02\u0A83\u0A85\x05\u01BE\xE0\x02\u0A84\u0A81\x03"+
		"\x02\x02\x02\u0A85\u0A88\x03\x02\x02\x02\u0A86\u0A84\x03\x02\x02\x02\u0A86"+
		"\u0A87\x03\x02\x02\x02\u0A87\u01BD\x03\x02\x02\x02\u0A88\u0A86\x03\x02"+
		"\x02\x02\u0A89\u0A8A\b\xE0\x01\x02\u0A8A\u0A8B\x05\u01C0\xE1\x02\u0A8B"+
		"\u0A94\x03\x02\x02\x02\u0A8C\u0A8D\f\x04\x02\x02\u0A8D\u0A8E\x07K\x02"+
		"\x02\u0A8E\u0A93\x05\u01C0\xE1\x02\u0A8F\u0A90\f\x03\x02\x02\u0A90\u0A91"+
		"\x07N\x02\x02\u0A91\u0A93\x05\u01C0\xE1\x02\u0A92\u0A8C\x03\x02\x02\x02"+
		"\u0A92\u0A8F\x03\x02\x02\x02\u0A93\u0A96\x03\x02\x02\x02\u0A94\u0A92\x03"+
		"\x02\x02\x02\u0A94\u0A95\x03\x02\x02\x02\u0A95\u01BF\x03\x02\x02\x02\u0A96"+
		"\u0A94\x03\x02\x02\x02\u0A97\u0A98\b\xE1\x01\x02\u0A98\u0A99\x05\u01C2"+
		"\xE2\x02\u0A99\u0AAB\x03\x02\x02\x02\u0A9A\u0A9B\f\x07\x02\x02\u0A9B\u0A9C"+
		"\x07F\x02\x02\u0A9C\u0AAA\x05\u01C2\xE2\x02\u0A9D\u0A9E\f\x06\x02\x02"+
		"\u0A9E\u0A9F\x07E\x02\x02\u0A9F\u0AAA\x05\u01C2\xE2\x02\u0AA0\u0AA1\f"+
		"\x05\x02\x02\u0AA1\u0AA2\x07L\x02\x02\u0AA2\u0AAA\x05\u01C2\xE2\x02\u0AA3"+
		"\u0AA4\f\x04\x02\x02\u0AA4\u0AA5\x07M\x02\x02\u0AA5\u0AAA\x05\u01C2\xE2"+
		"\x02\u0AA6\u0AA7\f\x03\x02\x02\u0AA7\u0AA8\x07\x1C\x02\x02\u0AA8\u0AAA"+
		"\x05\x0E\b\x02\u0AA9\u0A9A\x03\x02\x02\x02\u0AA9\u0A9D\x03\x02\x02\x02"+
		"\u0AA9\u0AA0\x03\x02\x02\x02\u0AA9\u0AA3\x03\x02\x02\x02\u0AA9\u0AA6\x03"+
		"\x02\x02\x02\u0AAA\u0AAD\x03\x02\x02\x02\u0AAB\u0AA9\x03\x02\x02\x02\u0AAB"+
		"\u0AAC\x03\x02\x02\x02\u0AAC\u01C1\x03\x02\x02\x02\u0AAD\u0AAB\x03\x02"+
		"\x02\x02\u0AAE\u0AAF\b\xE2\x01\x02\u0AAF\u0AB0\x05\u01C4\xE3\x02\u0AB0"+
		"\u0AC0\x03\x02\x02\x02\u0AB1\u0AB2\f\x05\x02\x02\u0AB2\u0AB3\x07F\x02"+
		"\x02\u0AB3\u0AB4\x07F\x02\x02\u0AB4\u0ABF\x05\u01C4\xE3\x02\u0AB5\u0AB6"+
		"\f\x04\x02\x02\u0AB6\u0AB7\x07E\x02\x02\u0AB7\u0AB8\x07E\x02\x02\u0AB8"+
		"\u0ABF\x05\u01C4\xE3\x02\u0AB9\u0ABA\f\x03\x02\x02\u0ABA\u0ABB\x07E\x02"+
		"\x02\u0ABB\u0ABC\x07E\x02\x02\u0ABC\u0ABD\x07E\x02\x02\u0ABD\u0ABF\x05"+
		"\u01C4\xE3\x02\u0ABE\u0AB1\x03\x02\x02\x02\u0ABE\u0AB5\x03\x02\x02\x02"+
		"\u0ABE\u0AB9\x03\x02\x02\x02\u0ABF\u0AC2\x03\x02\x02\x02\u0AC0\u0ABE\x03"+
		"\x02\x02\x02\u0AC0\u0AC1\x03\x02\x02\x02\u0AC1\u01C3\x03\x02\x02\x02\u0AC2"+
		"\u0AC0\x03\x02\x02\x02\u0AC3\u0AC4\b\xE3\x01\x02\u0AC4\u0AC5\x05\u01C6"+
		"\xE4\x02\u0AC5\u0ACE\x03\x02\x02\x02\u0AC6\u0AC7\f\x04\x02\x02\u0AC7\u0AC8"+
		"\x07S\x02\x02\u0AC8\u0ACD\x05\u01C6\xE4\x02\u0AC9\u0ACA\f\x03\x02\x02"+
		"\u0ACA\u0ACB\x07T\x02\x02\u0ACB\u0ACD\x05\u01C6\xE4\x02\u0ACC\u0AC6\x03"+
		"\x02\x02\x02\u0ACC\u0AC9\x03\x02\x02\x02\u0ACD\u0AD0\x03\x02\x02\x02\u0ACE"+
		"\u0ACC\x03\x02\x02\x02\u0ACE\u0ACF\x03\x02\x02\x02\u0ACF\u01C5\x03\x02"+
		"\x02\x02\u0AD0\u0ACE\x03\x02\x02\x02\u0AD1\u0AD2\b\xE4\x01\x02\u0AD2\u0AD3"+
		"\x05\u01C8\xE5\x02\u0AD3\u0ADF\x03\x02\x02\x02\u0AD4\u0AD5\f\x05\x02\x02"+
		"\u0AD5\u0AD6\x07U\x02\x02\u0AD6\u0ADE\x05\u01C8\xE5\x02\u0AD7\u0AD8\f"+
		"\x04\x02\x02\u0AD8\u0AD9\x07V\x02\x02\u0AD9\u0ADE\x05\u01C8\xE5\x02\u0ADA"+
		"\u0ADB\f\x03\x02\x02\u0ADB\u0ADC\x07Z\x02\x02\u0ADC\u0ADE\x05\u01C8\xE5"+
		"\x02\u0ADD\u0AD4\x03\x02\x02\x02\u0ADD\u0AD7\x03\x02\x02\x02\u0ADD\u0ADA"+
		"\x03\x02\x02\x02\u0ADE\u0AE1\x03\x02\x02\x02\u0ADF\u0ADD\x03\x02\x02\x02"+
		"\u0ADF\u0AE0\x03\x02\x02\x02\u0AE0\u01C7\x03\x02\x02\x02\u0AE1\u0ADF\x03"+
		"\x02\x02\x02\u0AE2\u0AEA\x05\u01CA\xE6\x02\u0AE3\u0AEA\x05\u01CC\xE7\x02"+
		"\u0AE4\u0AE5\x07S\x02\x02\u0AE5\u0AEA\x05\u01C8\xE5\x02\u0AE6\u0AE7\x07"+
		"T\x02\x02\u0AE7\u0AEA\x05\u01C8\xE5\x02\u0AE8\u0AEA\x05\u01CE\xE8\x02"+
		"\u0AE9\u0AE2\x03\x02\x02\x02\u0AE9\u0AE3\x03\x02\x02\x02\u0AE9\u0AE4\x03"+
		"\x02\x02\x02\u0AE9\u0AE6\x03\x02\x02\x02\u0AE9\u0AE8\x03\x02\x02\x02\u0AEA"+
		"\u01C9\x03\x02\x02\x02\u0AEB\u0AEC\x07Q\x02\x02\u0AEC\u0AED\x05\u01C8"+
		"\xE5\x02\u0AED\u01CB\x03\x02\x02\x02\u0AEE\u0AEF\x07R\x02\x02\u0AEF\u0AF0"+
		"\x05\u01C8\xE5\x02\u0AF0\u01CD\x03\x02\x02\x02\u0AF1\u0AF8\x05\u01D0\xE9"+
		"\x02\u0AF2\u0AF3\x07H\x02\x02\u0AF3\u0AF8\x05\u01C8\xE5\x02\u0AF4\u0AF5"+
		"\x07G\x02\x02\u0AF5\u0AF8\x05\u01C8\xE5\x02\u0AF6\u0AF8\x05\u01DA\xEE"+
		"\x02\u0AF7\u0AF1\x03\x02\x02\x02\u0AF7\u0AF2\x03\x02\x02\x02\u0AF7\u0AF4"+
		"\x03\x02\x02\x02\u0AF7\u0AF6\x03\x02\x02\x02\u0AF8\u01CF\x03\x02\x02\x02"+
		"\u0AF9\u0AFC\x05\u0162\xB2\x02\u0AFA\u0AFC\x05<\x1F\x02\u0AFB\u0AF9\x03"+
		"\x02\x02\x02\u0AFB\u0AFA\x03\x02\x02\x02\u0AFC\u0B01\x03\x02\x02\x02\u0AFD"+
		"\u0B00\x05\u01D4\xEB\x02\u0AFE\u0B00\x05\u01D8\xED\x02\u0AFF\u0AFD\x03"+
		"\x02\x02\x02\u0AFF\u0AFE\x03\x02\x02\x02\u0B00\u0B03\x03\x02\x02\x02\u0B01"+
		"\u0AFF\x03\x02\x02\x02\u0B01\u0B02\x03\x02\x02\x02\u0B02\u01D1\x03\x02"+
		"\x02";
	private static readonly _serializedATNSegment5: string =
		"\x02\u0B03\u0B01\x03\x02\x02\x02\u0B04\u0B05\x05\u01D0\xE9\x02\u0B05\u0B06"+
		"\x07Q\x02\x02\u0B06\u01D3\x03\x02\x02\x02\u0B07\u0B08\x07Q\x02\x02\u0B08"+
		"\u01D5\x03\x02\x02\x02\u0B09\u0B0A\x05\u01D0\xE9\x02\u0B0A\u0B0B\x07R"+
		"\x02\x02\u0B0B\u01D7\x03\x02\x02\x02\u0B0C\u0B0D\x07R\x02\x02\u0B0D\u01D9"+
		"\x03\x02\x02\x02\u0B0E\u0B0F\x07;\x02\x02\u0B0F\u0B10\x05\x06\x04\x02"+
		"\u0B10\u0B11\x07<\x02\x02\u0B11\u0B12\x05\u01C8\xE5\x02\u0B12\u0B2A\x03"+
		"\x02\x02\x02\u0B13\u0B14\x07;\x02\x02\u0B14\u0B18\x05\x0E\b\x02\u0B15"+
		"\u0B17\x05*\x16\x02\u0B16\u0B15\x03\x02\x02\x02\u0B17\u0B1A\x03\x02\x02"+
		"\x02\u0B18\u0B16\x03\x02\x02\x02\u0B18\u0B19\x03\x02\x02\x02\u0B19\u0B1B"+
		"\x03\x02\x02\x02\u0B1A\u0B18\x03\x02\x02\x02\u0B1B\u0B1C\x07<\x02\x02"+
		"\u0B1C\u0B1D\x05\u01CE\xE8\x02\u0B1D\u0B2A\x03\x02\x02\x02\u0B1E\u0B1F"+
		"\x07;\x02\x02\u0B1F\u0B23\x05\x0E\b\x02\u0B20\u0B22\x05*\x16\x02\u0B21"+
		"\u0B20\x03\x02\x02\x02\u0B22\u0B25\x03\x02\x02\x02\u0B23\u0B21\x03\x02"+
		"\x02\x02\u0B23\u0B24\x03\x02\x02\x02\u0B24\u0B26\x03\x02\x02\x02\u0B25"+
		"\u0B23\x03\x02\x02\x02\u0B26\u0B27\x07<\x02\x02\u0B27\u0B28\x05\u01A2"+
		"\xD2\x02\u0B28\u0B2A\x03\x02\x02\x02\u0B29\u0B0E\x03\x02\x02\x02\u0B29"+
		"\u0B13\x03\x02\x02\x02\u0B29\u0B1E\x03\x02\x02\x02\u0B2A\u01DB\x03\x02"+
		"\x02\x02\u0146\u01E0\u01E5\u01EC\u01F0\u01F4\u01FD\u0201\u0205\u0207\u020D"+
		"\u0212\u0219\u021E\u0220\u0226\u022B\u0230\u0235\u0240\u024E\u0253\u025B"+
		"\u0262\u0268\u026D\u0278\u027B\u0289\u028E\u0293\u0298\u029E\u02A8\u02B0"+
		"\u02BA\u02C2\u02CE\u02D2\u02D7\u02DD\u02E5\u02EE\u02F9\u0316\u031A\u031F"+
		"\u0325\u0328\u032B\u0337\u0342\u0350\u0357\u0360\u0367\u036C\u037B\u0382"+
		"\u0388\u038C\u0390\u0394\u0398\u039D\u03A1\u03A5\u03A7\u03AC\u03B3\u03B8"+
		"\u03BA\u03C0\u03C5\u03C9\u03DC\u03E1\u03F1\u03F6\u03FC\u0402\u0404\u0408"+
		"\u040D\u0411\u0418\u041F\u0427\u042A\u042F\u0437\u043C\u0443\u044A\u044F"+
		"\u0455\u0461\u0466\u046A\u0474\u0479\u0481\u0484\u0489\u0491\u0494\u0499"+
		"\u049E\u04A3\u04A8\u04AF\u04B4\u04BC\u04C1\u04C6\u04CB\u04D1\u04D7\u04DA"+
		"\u04DD\u04E6\u04EC\u04F2\u04F5\u04F8\u0500\u0505\u050A\u0510\u0513\u051E"+
		"\u0527\u0531\u0536\u0541\u0546\u0552\u0557\u0563\u056D\u0572\u057A\u057D"+
		"\u0584\u058C\u0592\u059B\u05A5\u05A9\u05AC\u05B5\u05C3\u05C6\u05CF\u05D4"+
		"\u05DC\u05E2\u05EA\u05F6\u05FD\u060B\u0621\u0643\u064F\u0655\u0661\u066E"+
		"\u0688\u068C\u0691\u0695\u0699\u06A1\u06A5\u06A9\u06B0\u06B9\u06C1\u06D0"+
		"\u06DC\u06E2\u06E8\u06FD\u0702\u0708\u0714\u071F\u0729\u072C\u0731\u073A"+
		"\u0740\u074A\u074F\u0758\u076F\u0779\u078F\u0796\u079E\u07A6\u07B1\u07C8"+
		"\u07D2\u07DD\u07F3\u07F7\u07FC\u0804\u080A\u080E\u0812\u0816\u081C\u0821"+
		"\u0826\u082A\u082E\u0834\u0839\u083E\u0842\u0846\u0848\u084D\u0852\u0857"+
		"\u085B\u085F\u0863\u0868\u0870\u0876\u087A\u087E\u0882\u0888\u088D\u0892"+
		"\u0896\u089A\u089C\u08A1\u08B0\u08BE\u08CA\u08D3\u08E2\u08EF\u08F8\u08FE"+
		"\u0905\u090A\u0911\u0916\u091D\u0922\u0929\u092E\u0936\u093B\u093F\u0943"+
		"\u0948\u094F\u0956\u095B\u0962\u0967\u096E\u0973\u097B\u0980\u0984\u098B"+
		"\u0991\u0998\u099F\u09A6\u09AE\u09B5\u09BD\u09C1\u09C8\u09CF\u09D6\u09DE"+
		"\u09E5\u09ED\u09F3\u09F9\u0A05\u0A0B\u0A11\u0A1C\u0A25\u0A2C\u0A33\u0A38"+
		"\u0A3C\u0A45\u0A50\u0A5A\u0A65\u0A70\u0A7B\u0A86\u0A92\u0A94\u0AA9\u0AAB"+
		"\u0ABE\u0AC0\u0ACC\u0ACE\u0ADD\u0ADF\u0AE9\u0AF7\u0AFB\u0AFF\u0B01\u0B18"+
		"\u0B23\u0B29";
	public static readonly _serializedATN: string = Utils.join(
		[
			Java8Parser._serializedATNSegment0,
			Java8Parser._serializedATNSegment1,
			Java8Parser._serializedATNSegment2,
			Java8Parser._serializedATNSegment3,
			Java8Parser._serializedATNSegment4,
			Java8Parser._serializedATNSegment5
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Java8Parser.__ATN) {
			Java8Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Java8Parser._serializedATN));
		}

		return Java8Parser.__ATN;
	}

}

export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FloatingPointLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.StringLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_literal; }
}


export class TypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_type; }
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primitiveType; }
}


export class NumericTypeContext extends ParserRuleContext {
	public integralType(): IntegralTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegralTypeContext);
	}
	public floatingPointType(): FloatingPointTypeContext | undefined {
		return this.tryGetRuleContext(0, FloatingPointTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_numericType; }
}


export class IntegralTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_integralType; }
}


export class FloatingPointTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_floatingPointType; }
}


export class ReferenceTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_referenceType; }
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, InterfaceType_lfno_classOrInterfaceTypeContext);
	}
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext[];
	public classType_lf_classOrInterfaceType(i: number): ClassType_lf_classOrInterfaceTypeContext;
	public classType_lf_classOrInterfaceType(i?: number): ClassType_lf_classOrInterfaceTypeContext | ClassType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, ClassType_lf_classOrInterfaceTypeContext);
		}
	}
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext[];
	public interfaceType_lf_classOrInterfaceType(i: number): InterfaceType_lf_classOrInterfaceTypeContext;
	public interfaceType_lf_classOrInterfaceType(i?: number): InterfaceType_lf_classOrInterfaceTypeContext | InterfaceType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceType_lf_classOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classOrInterfaceType; }
}


export class ClassTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
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
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classType; }
}


export class ClassType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classType_lf_classOrInterfaceType; }
}


export class ClassType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classType_lfno_classOrInterfaceType; }
}


export class InterfaceTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceType; }
}


export class InterfaceType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lf_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceType_lf_classOrInterfaceType; }
}


export class InterfaceType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType; }
}


export class TypeVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeVariable; }
}


export class ArrayTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_arrayType; }
}


export class DimsContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_dims; }
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeParameterModifier(): TypeParameterModifierContext[];
	public typeParameterModifier(i: number): TypeParameterModifierContext;
	public typeParameterModifier(i?: number): TypeParameterModifierContext | TypeParameterModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterModifierContext);
		} else {
			return this.getRuleContext(i, TypeParameterModifierContext);
		}
	}
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeParameter; }
}


export class TypeParameterModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeParameterModifier; }
}


export class TypeBoundContext extends ParserRuleContext {
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeBound; }
}


export class AdditionalBoundContext extends ParserRuleContext {
	public interfaceType(): InterfaceTypeContext {
		return this.getRuleContext(0, InterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_additionalBound; }
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeArgumentList(): TypeArgumentListContext {
		return this.getRuleContext(0, TypeArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeArguments; }
}


export class TypeArgumentListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeArgumentList; }
}


export class TypeArgumentContext extends ParserRuleContext {
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public wildcard(): WildcardContext | undefined {
		return this.tryGetRuleContext(0, WildcardContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeArgument; }
}


export class WildcardContext extends ParserRuleContext {
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public wildcardBounds(): WildcardBoundsContext | undefined {
		return this.tryGetRuleContext(0, WildcardBoundsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_wildcard; }
}


export class WildcardBoundsContext extends ParserRuleContext {
	public referenceType(): ReferenceTypeContext {
		return this.getRuleContext(0, ReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_wildcardBounds; }
}


export class PackageNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_packageName; }
}


export class TypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeName; }
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_packageOrTypeName; }
}


export class ExpressionNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_expressionName; }
}


export class MethodNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodName; }
}


export class AmbiguousNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_ambiguousName; }
}


export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Java8Parser.EOF, 0); }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_compilationUnit; }
}


export class PackageDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.Identifier);
		} else {
			return this.getToken(Java8Parser.Identifier, i);
		}
	}
	public packageModifier(): PackageModifierContext[];
	public packageModifier(i: number): PackageModifierContext;
	public packageModifier(i?: number): PackageModifierContext | PackageModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageModifierContext);
		} else {
			return this.getRuleContext(i, PackageModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_packageDeclaration; }
}


export class PackageModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_packageModifier; }
}


export class ImportDeclarationContext extends ParserRuleContext {
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleTypeImportDeclarationContext);
	}
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeImportOnDemandDeclarationContext);
	}
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleStaticImportDeclarationContext);
	}
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticImportOnDemandDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_importDeclaration; }
}


export class SingleTypeImportDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_singleTypeImportDeclaration; }
}


export class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getRuleContext(0, PackageOrTypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeImportOnDemandDeclaration; }
}


export class SingleStaticImportDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_singleStaticImportDeclaration; }
}


export class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_staticImportOnDemandDeclaration; }
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeDeclaration; }
}


export class ClassDeclarationContext extends ParserRuleContext {
	public normalClassDeclaration(): NormalClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classDeclaration; }
}


export class NormalClassDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public superclass(): SuperclassContext | undefined {
		return this.tryGetRuleContext(0, SuperclassContext);
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_normalClassDeclaration; }
}


export class ClassModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classModifier; }
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameterList(): TypeParameterListContext {
		return this.getRuleContext(0, TypeParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeParameters; }
}


export class TypeParameterListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeParameterList; }
}


export class SuperclassContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_superclass; }
}


export class SuperinterfacesContext extends ParserRuleContext {
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_superinterfaces; }
}


export class InterfaceTypeListContext extends ParserRuleContext {
	public interfaceType(): InterfaceTypeContext[];
	public interfaceType(i: number): InterfaceTypeContext;
	public interfaceType(i?: number): InterfaceTypeContext | InterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceTypeList; }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classBody; }
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public classMemberDeclaration(): ClassMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassMemberDeclarationContext);
	}
	public instanceInitializer(): InstanceInitializerContext | undefined {
		return this.tryGetRuleContext(0, InstanceInitializerContext);
	}
	public staticInitializer(): StaticInitializerContext | undefined {
		return this.tryGetRuleContext(0, StaticInitializerContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classBodyDeclaration; }
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classMemberDeclaration; }
}


export class FieldDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public fieldModifier(): FieldModifierContext[];
	public fieldModifier(i: number): FieldModifierContext;
	public fieldModifier(i?: number): FieldModifierContext | FieldModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldModifierContext);
		} else {
			return this.getRuleContext(i, FieldModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_fieldDeclaration; }
}


export class FieldModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_fieldModifier; }
}


export class VariableDeclaratorListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_variableDeclaratorList; }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_variableDeclarator; }
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_variableDeclaratorId; }
}


export class VariableInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_variableInitializer; }
}


export class UnannTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public unannReferenceType(): UnannReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannType; }
}


export class UnannPrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannPrimitiveType; }
}


export class UnannReferenceTypeContext extends ParserRuleContext {
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	public unannArrayType(): UnannArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannReferenceType; }
}


export class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext[];
	public unannClassType_lf_unannClassOrInterfaceType(i: number): UnannClassType_lf_unannClassOrInterfaceTypeContext;
	public unannClassType_lf_unannClassOrInterfaceType(i?: number): UnannClassType_lf_unannClassOrInterfaceTypeContext | UnannClassType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannClassType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannClassType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[];
	public unannInterfaceType_lf_unannClassOrInterfaceType(i: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
	public unannInterfaceType_lf_unannClassOrInterfaceType(i?: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext | UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannClassOrInterfaceType; }
}


export class UnannClassTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannClassType; }
}


export class UnannClassType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType; }
}


export class UnannClassType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType; }
}


export class UnannInterfaceTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannInterfaceType; }
}


export class UnannInterfaceType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lf_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType; }
}


export class UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType; }
}


export class UnannTypeVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannTypeVariable; }
}


export class UnannArrayTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unannArrayType; }
}


export class MethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public methodModifier(): MethodModifierContext[];
	public methodModifier(i: number): MethodModifierContext;
	public methodModifier(i?: number): MethodModifierContext | MethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodModifierContext);
		} else {
			return this.getRuleContext(i, MethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodDeclaration; }
}


export class MethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodModifier; }
}


export class MethodHeaderContext extends ParserRuleContext {
	public result(): ResultContext {
		return this.getRuleContext(0, ResultContext);
	}
	public methodDeclarator(): MethodDeclaratorContext {
		return this.getRuleContext(0, MethodDeclaratorContext);
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodHeader; }
}


export class ResultContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_result; }
}


export class MethodDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodDeclarator; }
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public lastFormalParameter(): LastFormalParameterContext {
		return this.getRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_formalParameterList; }
}


export class FormalParametersContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_formalParameters; }
}


export class FormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_formalParameter; }
}


export class VariableModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_variableModifier; }
}


export class LastFormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
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
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public formalParameter(): FormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_lastFormalParameter; }
}


export class ReceiverParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
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
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_receiverParameter; }
}


export class Throws_Context extends ParserRuleContext {
	public exceptionTypeList(): ExceptionTypeListContext {
		return this.getRuleContext(0, ExceptionTypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_throws_; }
}


export class ExceptionTypeListContext extends ParserRuleContext {
	public exceptionType(): ExceptionTypeContext[];
	public exceptionType(i: number): ExceptionTypeContext;
	public exceptionType(i?: number): ExceptionTypeContext | ExceptionTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExceptionTypeContext);
		} else {
			return this.getRuleContext(i, ExceptionTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_exceptionTypeList; }
}


export class ExceptionTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_exceptionType; }
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodBody; }
}


export class InstanceInitializerContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_instanceInitializer; }
}


export class StaticInitializerContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_staticInitializer; }
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public constructorDeclarator(): ConstructorDeclaratorContext {
		return this.getRuleContext(0, ConstructorDeclaratorContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public constructorModifier(): ConstructorModifierContext[];
	public constructorModifier(i: number): ConstructorModifierContext;
	public constructorModifier(i?: number): ConstructorModifierContext | ConstructorModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstructorModifierContext);
		} else {
			return this.getRuleContext(i, ConstructorModifierContext);
		}
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_constructorDeclaration; }
}


export class ConstructorModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_constructorModifier; }
}


export class ConstructorDeclaratorContext extends ParserRuleContext {
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getRuleContext(0, SimpleTypeNameContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_constructorDeclarator; }
}


export class SimpleTypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_simpleTypeName; }
}


export class ConstructorBodyContext extends ParserRuleContext {
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitConstructorInvocationContext);
	}
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_constructorBody; }
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_explicitConstructorInvocation; }
}


export class EnumDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enumDeclaration; }
}


export class EnumBodyContext extends ParserRuleContext {
	public enumConstantList(): EnumConstantListContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantListContext);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enumBody; }
}


export class EnumConstantListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enumConstantList; }
}


export class EnumConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public enumConstantModifier(): EnumConstantModifierContext[];
	public enumConstantModifier(i: number): EnumConstantModifierContext;
	public enumConstantModifier(i?: number): EnumConstantModifierContext | EnumConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantModifierContext);
		} else {
			return this.getRuleContext(i, EnumConstantModifierContext);
		}
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enumConstant; }
}


export class EnumConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enumConstantModifier; }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enumBodyDeclarations; }
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceDeclaration; }
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public extendsInterfaces(): ExtendsInterfacesContext | undefined {
		return this.tryGetRuleContext(0, ExtendsInterfacesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_normalInterfaceDeclaration; }
}


export class InterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceModifier; }
}


export class ExtendsInterfacesContext extends ParserRuleContext {
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_extendsInterfaces; }
}


export class InterfaceBodyContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext[];
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext;
	public interfaceMemberDeclaration(i?: number): InterfaceMemberDeclarationContext | InterfaceMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceBody; }
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceMemberDeclaration; }
}


export class ConstantDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public constantModifier(): ConstantModifierContext[];
	public constantModifier(i: number): ConstantModifierContext;
	public constantModifier(i?: number): ConstantModifierContext | ConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantModifierContext);
		} else {
			return this.getRuleContext(i, ConstantModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_constantDeclaration; }
}


export class ConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_constantModifier; }
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceMethodDeclaration; }
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_interfaceMethodModifier; }
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeDeclaration; }
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext[];
	public annotationTypeMemberDeclaration(i: number): AnnotationTypeMemberDeclarationContext;
	public annotationTypeMemberDeclaration(i?: number): AnnotationTypeMemberDeclarationContext | AnnotationTypeMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeBody; }
}


export class AnnotationTypeMemberDeclarationContext extends ParserRuleContext {
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementDeclarationContext);
	}
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeMemberDeclaration; }
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext[];
	public annotationTypeElementModifier(i: number): AnnotationTypeElementModifierContext;
	public annotationTypeElementModifier(i?: number): AnnotationTypeElementModifierContext | AnnotationTypeElementModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementModifierContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementModifierContext);
		}
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeElementDeclaration; }
}


export class AnnotationTypeElementModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeElementModifier; }
}


export class DefaultValueContext extends ParserRuleContext {
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_defaultValue; }
}


export class AnnotationContext extends ParserRuleContext {
	public normalAnnotation(): NormalAnnotationContext | undefined {
		return this.tryGetRuleContext(0, NormalAnnotationContext);
	}
	public markerAnnotation(): MarkerAnnotationContext | undefined {
		return this.tryGetRuleContext(0, MarkerAnnotationContext);
	}
	public singleElementAnnotation(): SingleElementAnnotationContext | undefined {
		return this.tryGetRuleContext(0, SingleElementAnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_annotation; }
}


export class NormalAnnotationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public elementValuePairList(): ElementValuePairListContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_normalAnnotation; }
}


export class ElementValuePairListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_elementValuePairList; }
}


export class ElementValuePairContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_elementValuePair; }
}


export class ElementValueContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_elementValue; }
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public elementValueList(): ElementValueListContext | undefined {
		return this.tryGetRuleContext(0, ElementValueListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_elementValueArrayInitializer; }
}


export class ElementValueListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_elementValueList; }
}


export class MarkerAnnotationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_markerAnnotation; }
}


export class SingleElementAnnotationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_singleElementAnnotation; }
}


export class ArrayInitializerContext extends ParserRuleContext {
	public variableInitializerList(): VariableInitializerListContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_arrayInitializer; }
}


export class VariableInitializerListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_variableInitializerList; }
}


export class BlockContext extends ParserRuleContext {
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_block; }
}


export class BlockStatementsContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_blockStatements; }
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_blockStatement; }
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_localVariableDeclarationStatement; }
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_localVariableDeclaration; }
}


export class StatementContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public ifThenStatement(): IfThenStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenStatementContext);
	}
	public ifThenElseStatement(): IfThenElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_statement; }
}


export class StatementNoShortIfContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementNoShortIfContext);
	}
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementNoShortIfContext);
	}
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementNoShortIfContext);
	}
	public forStatementNoShortIf(): ForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, ForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_statementNoShortIf; }
}


export class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public synchronizedStatement(): SynchronizedStatementContext | undefined {
		return this.tryGetRuleContext(0, SynchronizedStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_statementWithoutTrailingSubstatement; }
}


export class EmptyStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_emptyStatement; }
}


export class LabeledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_labeledStatement; }
}


export class LabeledStatementNoShortIfContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_labeledStatementNoShortIf; }
}


export class ExpressionStatementContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_expressionStatement; }
}


export class StatementExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public postIncrementExpression(): PostIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostIncrementExpressionContext);
	}
	public postDecrementExpression(): PostDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostDecrementExpressionContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_statementExpression; }
}


export class IfThenStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_ifThenStatement; }
}


export class IfThenElseStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_ifThenElseStatement; }
}


export class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext[];
	public statementNoShortIf(i: number): StatementNoShortIfContext;
	public statementNoShortIf(i?: number): StatementNoShortIfContext | StatementNoShortIfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementNoShortIfContext);
		} else {
			return this.getRuleContext(i, StatementNoShortIfContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_ifThenElseStatementNoShortIf; }
}


export class AssertStatementContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_assertStatement; }
}


export class SwitchStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public switchBlock(): SwitchBlockContext {
		return this.getRuleContext(0, SwitchBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_switchStatement; }
}


export class SwitchBlockContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_switchBlock; }
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabels(): SwitchLabelsContext {
		return this.getRuleContext(0, SwitchLabelsContext);
	}
	public blockStatements(): BlockStatementsContext {
		return this.getRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_switchBlockStatementGroup; }
}


export class SwitchLabelsContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_switchLabels; }
}


export class SwitchLabelContext extends ParserRuleContext {
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public enumConstantName(): EnumConstantNameContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_switchLabel; }
}


export class EnumConstantNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enumConstantName; }
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_whileStatement; }
}


export class WhileStatementNoShortIfContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_whileStatementNoShortIf; }
}


export class DoStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_doStatement; }
}


export class ForStatementContext extends ParserRuleContext {
	public basicForStatement(): BasicForStatementContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementContext);
	}
	public enhancedForStatement(): EnhancedForStatementContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_forStatement; }
}


export class ForStatementNoShortIfContext extends ParserRuleContext {
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementNoShortIfContext);
	}
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_forStatementNoShortIf; }
}


export class BasicForStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_basicForStatement; }
}


export class BasicForStatementNoShortIfContext extends ParserRuleContext {
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_basicForStatementNoShortIf; }
}


export class ForInitContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionListContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_forInit; }
}


export class ForUpdateContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext {
		return this.getRuleContext(0, StatementExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_forUpdate; }
}


export class StatementExpressionListContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext[];
	public statementExpression(i: number): StatementExpressionContext;
	public statementExpression(i?: number): StatementExpressionContext | StatementExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementExpressionContext);
		} else {
			return this.getRuleContext(i, StatementExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_statementExpressionList; }
}


export class EnhancedForStatementContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enhancedForStatement; }
}


export class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_enhancedForStatementNoShortIf; }
}


export class BreakStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_breakStatement; }
}


export class ContinueStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_continueStatement; }
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_returnStatement; }
}


export class ThrowStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_throwStatement; }
}


export class SynchronizedStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_synchronizedStatement; }
}


export class TryStatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	public tryWithResourcesStatement(): TryWithResourcesStatementContext | undefined {
		return this.tryGetRuleContext(0, TryWithResourcesStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_tryStatement; }
}


export class CatchesContext extends ParserRuleContext {
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_catches; }
}


export class CatchClauseContext extends ParserRuleContext {
	public catchFormalParameter(): CatchFormalParameterContext {
		return this.getRuleContext(0, CatchFormalParameterContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_catchClause; }
}


export class CatchFormalParameterContext extends ParserRuleContext {
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_catchFormalParameter; }
}


export class CatchTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	public classType(): ClassTypeContext[];
	public classType(i: number): ClassTypeContext;
	public classType(i?: number): ClassTypeContext | ClassTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassTypeContext);
		} else {
			return this.getRuleContext(i, ClassTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_catchType; }
}


export class Finally_Context extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_finally_; }
}


export class TryWithResourcesStatementContext extends ParserRuleContext {
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getRuleContext(0, ResourceSpecificationContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_tryWithResourcesStatement; }
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public resourceList(): ResourceListContext {
		return this.getRuleContext(0, ResourceListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_resourceSpecification; }
}


export class ResourceListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_resourceList; }
}


export class ResourceContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_resource; }
}


export class PrimaryContext extends ParserRuleContext {
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primaryContext);
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionContext);
	}
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext[];
	public primaryNoNewArray_lf_primary(i: number): PrimaryNoNewArray_lf_primaryContext;
	public primaryNoNewArray_lf_primary(i?: number): PrimaryNoNewArray_lf_primaryContext | PrimaryNoNewArray_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primary; }
}


export class PrimaryNoNewArrayContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray; }
}


export class PrimaryNoNewArray_lf_arrayAccessContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess; }
}


export class PrimaryNoNewArray_lfno_arrayAccessContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess; }
}


export class PrimaryNoNewArray_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_primary; }
}


export class PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary; }
}


export class PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary; }
}


export class PrimaryNoNewArray_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_primary; }
}


export class PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary; }
}


export class PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary; }
}


export class ClassInstanceCreationExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.Identifier);
		} else {
			return this.getToken(Java8Parser.Identifier, i);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
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
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classInstanceCreationExpression; }
}


export class ClassInstanceCreationExpression_lf_primaryContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
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
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classInstanceCreationExpression_lf_primary; }
}


export class ClassInstanceCreationExpression_lfno_primaryContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.Identifier);
		} else {
			return this.getToken(Java8Parser.Identifier, i);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
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
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_classInstanceCreationExpression_lfno_primary; }
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_typeArgumentsOrDiamond; }
}


export class FieldAccessContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_fieldAccess; }
}


export class FieldAccess_lf_primaryContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_fieldAccess_lf_primary; }
}


export class FieldAccess_lfno_primaryContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_fieldAccess_lfno_primary; }
}


export class ArrayAccessContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
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
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_arrayAccessContext);
	}
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext[];
	public primaryNoNewArray_lf_arrayAccess(i: number): PrimaryNoNewArray_lf_arrayAccessContext;
	public primaryNoNewArray_lf_arrayAccess(i?: number): PrimaryNoNewArray_lf_arrayAccessContext | PrimaryNoNewArray_lf_arrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_arrayAccessContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_arrayAccessContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_arrayAccess; }
}


export class ArrayAccess_lf_primaryContext extends ParserRuleContext {
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext);
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
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[];
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i?: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext | PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_arrayAccess_lf_primary; }
}


export class ArrayAccess_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
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
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext);
	}
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[];
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i?: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext | PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_arrayAccess_lfno_primary; }
}


export class MethodInvocationContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodInvocation; }
}


export class MethodInvocation_lf_primaryContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodInvocation_lf_primary; }
}


export class MethodInvocation_lfno_primaryContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodInvocation_lfno_primary; }
}


export class ArgumentListContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_argumentList; }
}


export class MethodReferenceContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodReference; }
}


export class MethodReference_lf_primaryContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodReference_lf_primary; }
}


export class MethodReference_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_methodReference_lfno_primary; }
}


export class ArrayCreationExpressionContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dimExprs(): DimExprsContext | undefined {
		return this.tryGetRuleContext(0, DimExprsContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_arrayCreationExpression; }
}


export class DimExprsContext extends ParserRuleContext {
	public dimExpr(): DimExprContext[];
	public dimExpr(i: number): DimExprContext;
	public dimExpr(i?: number): DimExprContext | DimExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimExprContext);
		} else {
			return this.getRuleContext(i, DimExprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_dimExprs; }
}


export class DimExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_dimExpr; }
}


export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_constantExpression; }
}


export class ExpressionContext extends ParserRuleContext {
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_expression; }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_lambdaExpression; }
}


export class LambdaParametersContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public inferredFormalParameterList(): InferredFormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, InferredFormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_lambdaParameters; }
}


export class InferredFormalParameterListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.Identifier);
		} else {
			return this.getToken(Java8Parser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_inferredFormalParameterList; }
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
	@Override public get ruleIndex(): number { return Java8Parser.RULE_lambdaBody; }
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_assignmentExpression; }
}


export class AssignmentContext extends ParserRuleContext {
	public leftHandSide(): LeftHandSideContext {
		return this.getRuleContext(0, LeftHandSideContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_assignment; }
}


export class LeftHandSideContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_leftHandSide; }
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_assignmentOperator; }
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getRuleContext(0, ConditionalOrExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_conditionalExpression; }
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getRuleContext(0, ConditionalAndExpressionContext);
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOrExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_conditionalOrExpression; }
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getRuleContext(0, InclusiveOrExpressionContext);
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalAndExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_conditionalAndExpression; }
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getRuleContext(0, ExclusiveOrExpressionContext);
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_inclusiveOrExpression; }
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_exclusiveOrExpression; }
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_andExpression; }
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_equalityExpression; }
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_relationalExpression; }
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_shiftExpression; }
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_additiveExpression; }
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_multiplicativeExpression; }
}


export class UnaryExpressionContext extends ParserRuleContext {
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unaryExpression; }
}


export class PreIncrementExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_preIncrementExpression; }
}


export class PreDecrementExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_preDecrementExpression; }
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_unaryExpressionNotPlusMinus; }
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext[];
	public postIncrementExpression_lf_postfixExpression(i: number): PostIncrementExpression_lf_postfixExpressionContext;
	public postIncrementExpression_lf_postfixExpression(i?: number): PostIncrementExpression_lf_postfixExpressionContext | PostIncrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostIncrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostIncrementExpression_lf_postfixExpressionContext);
		}
	}
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext[];
	public postDecrementExpression_lf_postfixExpression(i: number): PostDecrementExpression_lf_postfixExpressionContext;
	public postDecrementExpression_lf_postfixExpression(i?: number): PostDecrementExpression_lf_postfixExpressionContext | PostDecrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostDecrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostDecrementExpression_lf_postfixExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_postfixExpression; }
}


export class PostIncrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_postIncrementExpression; }
}


export class PostIncrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_postIncrementExpression_lf_postfixExpression; }
}


export class PostDecrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_postDecrementExpression; }
}


export class PostDecrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_postDecrementExpression_lf_postfixExpression; }
}


export class CastExpressionContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java8Parser.RULE_castExpression; }
}


