"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Rol_1 = require("../models/Rol");
const roleRepository = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
class RoleController {
}
_a = RoleController;
RoleController.createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.body;
    try {
        const rol = new Rol_1.Rol();
        rol.type = type;
        yield roleRepository.save(rol);
        return res.json({});
    }
    catch (error) {
    }
});
exports.default = RoleController;
//# sourceMappingURL=role.controller.js.map